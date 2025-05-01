import os
import json
import hashlib

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
                return json.load(f)
        return {}

    # Save the current snapshot to a JSON file
    def save_snapshot(self, snapshot_data):
        with open(self.snapshot_path, "w", encoding="utf-8") as f:
            json.dump(snapshot_data, f, indent=2)

    # Generate a dictionary of filenames to MD5 hashes for all files in the documents directory
    def get_current_snapshot(self):
        snapshot = {}
        for filename in os.listdir(self.document_dir):
            file_path = os.path.join(self.document_dir, filename)
            if os.path.isfile(file_path):
                snapshot[filename] = self.compute_md5(file_path)
        return snapshot

    def detect_changed_files(self, new_snapshot):
        old_snapshot = self.load_snapshot()
        return old_snapshot != new_snapshot



if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Define paths
    documents_dir = os.path.normpath(os.path.join(script_dir, "..", "..", "..", "docs", "documents"))
    snapshot_file = os.path.normpath(os.path.join(script_dir, "..", "..", "..", "docs", "documents_snapshot.json"))

    manager_documents = DocumentSnapshotManager(documents_dir, snapshot_file)

    current_documents_snapshot = manager_documents.get_current_snapshot()

    if manager_documents.detect_changed_files(current_documents_snapshot):
        print("Documents has been Changed.")
        manager_documents.save_snapshot(current_documents_snapshot)
    else:
        print("No changes detected on documents.")