# PDF Extraction

This repo now includes a local portable PDF text extractor based on the official Xpdf command-line tools.

## Installed Tool

- Binary location: `tools/xpdf-tools-win-4.06/bin64/pdftotext.exe`
- Vendor: [XpdfReader](https://www.xpdfreader.com/download.html)

## Wrapper Script

Use the PowerShell wrapper so agent sessions have one stable command:

```powershell
.\scripts\extract-pdf-text.ps1 -PdfPath "raw\sources\agents\example.pdf"
```

Optional explicit output path:

```powershell
.\scripts\extract-pdf-text.ps1 -PdfPath "raw\sources\agents\example.pdf" -OutputPath "raw\sources\agents\example.txt"
```

## Default Behavior

- Reads a PDF from any path in the repo
- Writes UTF-8 text output
- Defaults to the same path with a `.txt` extension if `-OutputPath` is omitted

## Bulk Extraction

To extract every PDF under `raw/sources/`:

```powershell
.\scripts\extract-all-pdfs.ps1
```

To target a narrower subtree:

```powershell
.\scripts\extract-all-pdfs.ps1 -Root "raw/sources/agents"
```

## Recommended Ingest Workflow

For PDF-heavy collections, use this pattern:

1. Keep the original PDF in `raw/sources/`.
2. Extract a sibling `.txt` file with the wrapper script.
3. Let the agent read the `.txt` first for body text.
4. Use the original PDF for metadata or page-image follow-up if needed.

This preserves raw-source immutability while making ingest much more reliable.
