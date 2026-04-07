param(
    [Alias("FolderPath")]
    [string]$Root = "raw/sources",
    [switch]$Recurse = $true
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$extractScript = Join-Path $PSScriptRoot "extract-pdf-text.ps1"

if (-not (Test-Path -LiteralPath $extractScript)) {
    throw "extract-pdf-text.ps1 not found at $extractScript"
}

$searchRoot = Join-Path $repoRoot $Root
if (-not (Test-Path -LiteralPath $searchRoot)) {
    throw "Root path not found: $searchRoot"
}

$items = if ($Recurse) {
    Get-ChildItem -LiteralPath $searchRoot -Filter *.pdf -File -Recurse
} else {
    Get-ChildItem -LiteralPath $searchRoot -Filter *.pdf -File
}

foreach ($item in $items) {
    & powershell -ExecutionPolicy Bypass -File $extractScript -PdfPath $item.FullName
}
