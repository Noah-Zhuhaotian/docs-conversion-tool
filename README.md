# Documents to Markdown Conversion Tool

A GitHub workflow-based tool that automatically converts various document formats to `Markdown` using Microsoft's `MarkItDown` library. The tool tracks changes to source documents and only regenerates Markdown files when necessary, ensuring efficient processing.

### Features
- Automatic document conversion from various formats (`PDF`, `DOCX`, `PPTX`, `XLSX`, etc.) to `Markdown`
- Efficient processing that only converts documents when changes are detected
- GitHub Actions integration for automated workflow
- Document snapshot tracking with MD5 checksums to monitor file changes
- Support for a wide range of document formats through MarkItDown

### How It Works

1. The tool monitors the `docs/documents` directory for any changes
2. When changes are detected, it uses MarkItDown to convert files to Markdown format
3. Converted Markdown files are saved in the docs/markdown directory
4. A snapshot of file checksums is maintained to track changes efficiently

### Directory Structure
```bash
docs/
├── documents/        # Place your source documents here
├── markdown/         # Generated Markdown files appear here
└── documents_snapshot.json  # Tracks file checksums for change detection
```

### GitHub Workflow
The tool uses GitHub Actions to automate the conversion process:

- Triggers automatically on pushes to the dev branch
- Can be manually triggered with workflow_dispatch
- Checks for changes in documents before running the conversion
- Commits and pushes changes to the repository
  
## Usage
### Adding New Documents

1. Add your documents to the `docs/documents` directory
2. Commit and push to the repository
3. The GitHub workflow will automatically detect changes and convert the documents
4. Converted Markdown files will be available in the `docs/markdown` directory

### Manual Trigger
You can manually trigger the workflow from the GitHub Actions tab with the option to force conversion of all documents.

###Dependencies

- Python 3.13
- MarkItDown (from Microsoft)
- FFmpeg (for audio/video processing)

### Development
**Local Setup**

1. Clone the repository
2. Install dependencies:

```bash
# Install MarkItDown with all optional dependencies
git clone https://github.com/microsoft/markitdown.git
cd markitdown
pip install -e 'packages/markitdown[all]'

# Install other dependencies
sudo apt-get update
sudo apt-get install -y ffmpeg  # Required for audio processing
```

3. Run the conversion script:
```bash
python .github/workflows/scripts/documents_to_md.py
```

4. Check the output in the `docs/markdown` director

### How the Change Detection Works

The tool uses MD5 checksums to detect changes in files:

1. Each file's MD5 checksum is calculated and stored in `documents_snapshot.json`
2. On subsequent runs, new checksums are compared with the stored ones
3. The conversion process runs only if changes are detected
