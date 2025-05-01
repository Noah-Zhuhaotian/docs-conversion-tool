import os
from markitdown import MarkItDown
from get_current_documents import DocumentSnapshotManager



def convert_documents_to_md(documents_dir, output_dir, enable_plugins=False):
    # Enable the pulgins if it has
    md = MarkItDown()

    # Get the documents path
    documents_dir = os.path.normpath(documents_dir)
    
    # Get the output path
    output_dir = os.path.normpath(output_dir)

    # Make sure the output_dir exist
    os.makedirs(output_dir, exist_ok=True)

    # get all the path of the files
    files = os.listdir(documents_dir)

    # Process each file
    for filename in files:
        # Get the full path of the input file
        input_path = os.path.join(documents_dir, filename)

        if os.path.isdir(input_path):
            continue

        # Get the base name without extension for output file naming
        # base_name = os.path.splitext(filename)[0]
        base_name = filename.replace('.', '_')
        output_filename = f"{base_name}.md"
        output_path = os.path.join(output_dir, output_filename)

        try:
        # Convert the document
            result = md.convert(input_path)

            # Write the output to a markdown file
            with open(output_path, "w", encoding="utf-8") as md_file:
                md_file.write(result.text_content)

            print(f"Successfully converted {filename} to {output_filename}")
        except Exception as e:
            print(f"Error converting {filename}: {str(e)}")
        
    print(f"Convertaion complete!")
    

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    documents_path = os.path.join(script_dir, "..", "..", "..", "docs", "documents")
    markdown_output_path = os.path.join(script_dir, "..", "..", "..", "docs", "markdown")

    convert_documents_to_md(documents_path, markdown_output_path)
