param(
    [Parameter(Mandatory = $true)]
    [string]$SourceFolder,

    [Parameter(Mandatory = $true)]
    [string]$FolderTag,

    [string[]]$ConceptLinks = @(),

    [string[]]$ExtraTags = @()
)

$ErrorActionPreference = "Stop"

function ConvertTo-Slug {
    param([string]$Text)

    $value = $Text.ToLowerInvariant()
    $value = $value -replace "&", " and "
    $value = $value -replace "[^a-z0-9]+", "-"
    $value = $value.Trim("-")
    $value = $value -replace "-{2,}", "-"
    return $value
}

function Get-ConceptBullets {
    param([string[]]$Items)

    $lines = @()
    foreach ($item in $Items) {
        $parts = $item -split "\|", 2
        if ($parts.Count -eq 2) {
            $lines += "- [$($parts[1])](../concepts/$($parts[0]).md)"
        }
    }
    return $lines
}

function Get-AbstractSnippet {
    param(
        [string]$TxtPath,
        [string]$Title
    )

    if (-not (Test-Path -LiteralPath $TxtPath)) {
        return "First-pass ingest for $Title based on the local filename and folder context. A deeper synthesis pass should revisit the full text if this source becomes central."
    }

    $text = Get-Content -LiteralPath $TxtPath -Raw
    if ([string]::IsNullOrWhiteSpace($text)) {
        return "First-pass ingest for $Title based on the local filename and extracted text shell, but the extraction output appears thin and should be revisited if this source becomes important."
    }

    $normalized = $text -replace "\r", " " -replace "\n", " "
    $normalized = $normalized -replace "\s+", " "
    $normalized = $normalized.Trim()

    $patterns = @(
        "(?is)\babstract\b[\s:\.-]*(.{180,900}?)(?:\bkeywords\b|\bindex terms\b|\b1\s+introduction\b|\bintroduction\b)",
        "(?is)\bsummary\b[\s:\.-]*(.{180,700}?)(?:\bkeywords\b|\b1\s+introduction\b|\bintroduction\b)"
    )

    foreach ($pattern in $patterns) {
        $match = [regex]::Match($normalized, $pattern)
        if ($match.Success) {
            $snippet = $match.Groups[1].Value.Trim()
            if ($snippet.Length -gt 520) {
                $snippet = $snippet.Substring(0, 520).Trim()
                $lastStop = $snippet.LastIndexOf(". ")
                if ($lastStop -gt 120) {
                    $snippet = $snippet.Substring(0, $lastStop + 1).Trim()
                }
            }
            return $snippet
        }
    }

    $snippet = $normalized
    if ($snippet.Length -gt 420) {
        $snippet = $snippet.Substring(0, 420).Trim()
        $lastStop = $snippet.LastIndexOf(". ")
        if ($lastStop -gt 120) {
            $snippet = $snippet.Substring(0, $lastStop + 1).Trim()
        }
    }

    return "First-pass ingest for $Title. Extracted text is available locally, but this summary should be tightened in a later synthesis pass: $snippet"
}

function Get-KeyContributionBullets {
    param(
        [string]$Title,
        [string]$FolderTag,
        [string[]]$ConceptLabels
    )

    $bullets = @(
        "- Adds coverage to the ``$FolderTag`` cluster."
    )

    if ($ConceptLabels.Count -gt 0) {
        $bullets += "- Likely connects most strongly to " + (($ConceptLabels | ForEach-Object { "``$_``" }) -join ", ") + "."
    }

    if ($Title -match "survey|review|roadmap|index|report") {
        $bullets += "- Functions as a synthesis or landscape source rather than only a narrow method paper."
    } elseif ($Title -match "benchmark|evaluat|score|validat") {
        $bullets += "- Useful for evaluation, benchmarking, or measurement questions."
    } elseif ($Title -match "prompt|reason|thought|verification|instruction") {
        $bullets += "- Relevant to prompting or reasoning-structure design."
    } elseif ($Title -match "retriev|rag|rank|search") {
        $bullets += "- Relevant to retrieval and evidence-selection workflows."
    } else {
        $bullets += "- Worth revisiting if this thread becomes central to later synthesis."
    }

    return $bullets
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$resolvedSourceFolder = Join-Path $repoRoot $SourceFolder
$wikiSourcesFolder = Join-Path $repoRoot "wiki\sources"
$today = Get-Date -Format "yyyy-MM-dd"

if (-not (Test-Path -LiteralPath $resolvedSourceFolder)) {
    throw "Source folder not found: $resolvedSourceFolder"
}

New-Item -ItemType Directory -Force -Path $wikiSourcesFolder | Out-Null

$conceptBullets = Get-ConceptBullets -Items $ConceptLinks
$conceptLabels = @()
foreach ($item in $ConceptLinks) {
    $parts = $item -split "\|", 2
    if ($parts.Count -eq 2) {
        $conceptLabels += $parts[1]
    }
}

$pdfFiles = Get-ChildItem -LiteralPath $resolvedSourceFolder -Filter *.pdf -File | Sort-Object BaseName
$created = @()
$skipped = @()

foreach ($pdf in $pdfFiles) {
    $title = $pdf.BaseName.Trim()
    $slug = ConvertTo-Slug -Text $title
    $targetPath = Join-Path $wikiSourcesFolder ($slug + ".md")

    if (Test-Path -LiteralPath $targetPath) {
        $skipped += $targetPath
        continue
    }

    $txtPath = [System.IO.Path]::ChangeExtension($pdf.FullName, ".txt")
    $summary = Get-AbstractSnippet -TxtPath $txtPath -Title $title
    $contributions = Get-KeyContributionBullets -Title $title -FolderTag $FolderTag -ConceptLabels $conceptLabels

    $frontmatterSources = @("  - " + ($pdf.FullName.Replace($repoRoot + "\", "") -replace "\\", "/"))
    if (Test-Path -LiteralPath $txtPath) {
        $frontmatterSources += "  - " + ($txtPath.Replace($repoRoot + "\", "") -replace "\\", "/")
    }

    $tags = @("source", "llm", $FolderTag) + $ExtraTags | Select-Object -Unique
    $tagString = "[" + (($tags | ForEach-Object { $_ }) -join ", ") + "]"

    $content = @(
        "---",
        "title: $title",
        "type: source",
        "status: ingested",
        "created: $today",
        "updated: $today",
        "sources:"
    )
    $content += $frontmatterSources
    $content += @(
        "tags: $tagString",
        "confidence: medium",
        "---",
        "",
        "# $title",
        "",
        "## Summary",
        "",
        $summary,
        "",
        "## Key Contributions",
        ""
    )
    $content += $contributions
    $content += @(
        "",
        "## Related Concepts",
        ""
    )
    $content += $conceptBullets
    $rawRelative = ($pdf.FullName.Replace($repoRoot + "\", "") -replace "\\", "/")
    $txtRelative = ($txtPath.Replace($repoRoot + "\", "") -replace "\\", "/")
    $content += @(
        "",
        "## Provenance",
        "",
        "- Raw file: ``$rawRelative``"
    )
    if (Test-Path -LiteralPath $txtPath) {
        $content += "- Extracted text file: ``$txtRelative``"
    }

    Set-Content -LiteralPath $targetPath -Value $content -Encoding UTF8
    $created += $targetPath
}

Write-Output ("Created {0} source pages." -f $created.Count)
if ($created.Count -gt 0) {
    $created
}
if ($skipped.Count -gt 0) {
    Write-Output ("Skipped {0} existing pages." -f $skipped.Count)
}
