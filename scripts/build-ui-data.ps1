param(
  [string]$OutputPath = "app/src/data/workspace-summary.json"
)

$workspaceName = Split-Path -Leaf (Get-Location)
$recentOutputs = Get-ChildItem "wiki/outputs" -File -Filter *.md |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 6

$data = [ordered]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssK")
  workspaceName = $workspaceName
  totals = [ordered]@{
    rawFiles = (Get-ChildItem "raw/sources" -Recurse -File | Measure-Object).Count
    sources = (Get-ChildItem "wiki/sources" -File -Filter *.md | Measure-Object).Count
    concepts = (Get-ChildItem "wiki/concepts" -File -Filter *.md | Measure-Object).Count
    entities = (Get-ChildItem "wiki/entities" -File -Filter *.md | Measure-Object).Count
    outputs = (Get-ChildItem "wiki/outputs" -File -Filter *.md | Measure-Object).Count
    maintenance = (Get-ChildItem "wiki/maintenance" -File -Filter *.md | Measure-Object).Count
    indexes = (Get-ChildItem "wiki/indexes" -File -Filter *.md | Measure-Object).Count
    foldersIngested = (Get-ChildItem "raw/sources" -Directory | Measure-Object).Count
    foldersRemaining = 0
  }
  recentOutputs = @(
    foreach ($item in $recentOutputs) {
      [ordered]@{
        title = ($item.BaseName -replace "^\d{4}-\d{2}-\d{2}-", "" -replace "-", " ")
        path = "wiki/outputs/$($item.Name)"
        theme = "output"
      }
    }
  )
  indexes = @(
    Get-ChildItem "wiki/indexes" -File -Filter *.md |
      Sort-Object Name |
      ForEach-Object { $_.BaseName }
  )
  focusAreas = @(
    [ordered]@{
      name = "LLM and Agents"
      summary = "The most mature area of the wiki, with cluster maps, comparison notes, and strong entity coverage."
    },
    [ordered]@{
      name = "Methods and Foundations"
      summary = "Causality, clustering, graphs, and methodological support layers are now connected into a coherent navigation surface."
    },
    [ordered]@{
      name = "Text Analysis and Operations"
      summary = "Grammar, sentence embeddings, sentiment, topics, CX, and process mining are now ingested and navigable."
    }
  )
}

$json = $data | ConvertTo-Json -Depth 6
$dir = Split-Path -Parent $OutputPath
if (-not (Test-Path $dir)) {
  New-Item -ItemType Directory -Path $dir | Out-Null
}
$json | Set-Content -Path $OutputPath -Encoding UTF8
