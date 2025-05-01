import os
import sys
import json
import hashlib
import argparse

class DocumentSnapshotManager:
    def __init__(self, document_dir, snapshot_path):
        self.document_dir = document_dir
        self.snapshot_path = snapshot_path
        self.old_snapshot = self.load_snapshot()

    # Compute MD5 checksum for a given file
    def compute_md5(self, file_path):
        hash_md5 = hashlib.md5()
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()


    # Load the snapshot JSON file if it exists, otherwise return an empty dict
    def load_snapshot(self):
        if os.path.exists(self.snapshot_path):
            with open(self.snapshot_path, "r", encoding="utf-8") as f:
                all_data = json.load(f)
                folder_name = os.path.basename(os.path.normpath(self.document_dir))
                # Return the snapshot for this specific folder, or empty dict if not found
                return all_data.get(folder_name, {})
        return {}

    # Save the current snapshot to a JSON file
    def save_snapshot(self, snapshot_data):
        folder_name = os.path.basename(os.path.normpath(self.document_dir))
        existing_data = {}

        # Load existing data if it exists
        if os.path.exists(self.snapshot_path):
            with open(self.snapshot_path, "r", encoding="utf-8") as f:
                existing_data = json.load(f)
        # Update the snapshot for the specific folder
        existing_data[folder_name] = snapshot_data 

        # Save the updated snapshot data back to the file
        with open(self.snapshot_path, "w", encoding="utf-8") as f:
            json.dump(existing_data, f, indent=2)

    # Generate a dictionary of filenames to MD5 hashes for all files in the documents directory
    def get_current_snapshot(self):
        snapshot = {}
        for filename in os.listdir(self.document_dir):
            file_path = os.path.join(self.document_dir, filename)
            if os.path.isfile(file_path):
                snapshot[filename] = self.compute_md5(file_path)
        return snapshot

    def detect_changed_files(self, new_snapshot):
        """Detect if files have changed using deep comparison instead of reference comparison"""
        old_snapshot = self.old_snapshot
        
        # If the number of files is different, there's definitely a change
        if len(old_snapshot) != len(new_snapshot):
            return True
        
        # Compare each file's MD5 value
        for filename, md5 in new_snapshot.items():
            if filename not in old_snapshot or old_snapshot[filename] != md5:
                return True
        
        # Check for deleted files
        for filename in old_snapshot:
            if filename not in new_snapshot:
                return True
        
        # All checks passed, no changes detected
        return False



if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Define paths
    documents_dir = os.path.normpath(os.path.join(script_dir, "..", "..", "..", "docs", "documents"))
    markdown_dir = os.path.normpath(os.path.join(script_dir, "..", "..", "..", "docs", "markdown"))
    snapshot_file = os.path.normpath(os.path.join(script_dir, "..", "..", "..", "docs", "documents_snapshot.json"))
    
    # Ensure the docs directory exists
    os.makedirs(os.path.dirname(snapshot_file), exist_ok=True)
    
    # Ensure both directories exist
    os.makedirs(documents_dir, exist_ok=True)
    os.makedirs(markdown_dir, exist_ok=True)
    
    manager_documents = DocumentSnapshotManager(documents_dir, snapshot_file)
    manager_markdown = DocumentSnapshotManager(markdown_dir, snapshot_file)
    
    current_documents_snapshot = manager_documents.get_current_snapshot()
    current_markdown_snapshot = manager_markdown.get_current_snapshot()
    
    changed = False
    
    if manager_documents.detect_changed_files(current_documents_snapshot):
        print("Documents has been Changed.")
        manager_documents.save_snapshot(current_documents_snapshot)
        changed = True
    
    if manager_markdown.detect_changed_files(current_markdown_snapshot):
        print("Markdown has been Changed.")
        manager_markdown.save_snapshot(current_markdown_snapshot)
        changed = True
    
    if changed:
        print("True")
    else:
        print("False")