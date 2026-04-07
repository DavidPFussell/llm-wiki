param(
    [Parameter(Mandatory = $true)]
    [string]$PdfPath,

    [string]$OutputPath
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$pdftotext = Join-Path $repoRoot "tools\xpdf-tools-win-4.06\bin64\pdftotext.exe"

if (-not (Test-Path -LiteralPath $pdftotext)) {
    throw "pdftotext.exe not found at $pdftotext"
}

$resolvedPdf = Resolve-Path -LiteralPath $PdfPath

if (-not $OutputPath) {
    $OutputPath = [System.IO.Path]::ChangeExtension($resolvedPdf.Path, ".txt")
}

$outputDir = Split-Path -Parent $OutputPath
if ($outputDir) {
    New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
}

& $pdftotext "-enc" "UTF-8" "-nopgbrk" $resolvedPdf.Path $OutputPath

Write-Output $OutputPath
