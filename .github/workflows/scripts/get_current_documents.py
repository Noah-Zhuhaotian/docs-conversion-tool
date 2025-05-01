import os
import json
import hashlib


# Compute MD5 checksum for a given file
def compute_md5(file_path):
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()


# Load the snapshot JSON file if it exists, otherwise return an empty dict
def load_snapshot(snapshot_path):
    if os.path.exists(snapshot_path):
        with open(snapshot_path, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

# Save the current snapshot to a JSON file
def save_snapshot(snaphost_path, snapshot_data):
    with open(snaphost_path, "w", encoding="utf-8") as f:
        json.dump(snapshot_data, f, indent=2)

# Generate a dictionary of filenames to MD5 hashes for all files in the documents directory
def get_current_snapshot(document_dir):
    snapshot = {}
    for filename in os.listdir(document_dir):
        file_path = os.path.join(document_dir, filename)
        if os.path.isfile(file_path):
            snapshot[filename] = compute_md5(file_path)
    return snapshot

def detect_changed_files(old_snapshot, new_snapshot):
    for filename, md5 in new_snapshot.items():
        if filename not in old_snapshot or old_snapshot[filename] != md5:
            return True
        else:
            return False



if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Define paths
    documents_dir = os.path.join(script_dir, "..", "..", "..", "docs", "documents")
    snapshot_file = os.path.join(script_dir, "..", "..", "..", "docs", "documents_snapshot.json")

    # Load previous snapshot (if exists), and compute current state
    old_snapshot = load_snapshot(snapshot_file)
    new_snapshot = get_current_snapshot(documents_dir)

    # Determine which files changed or are new
    changed_files = detect_changed_files(old_snapshot, new_snapshot)

    print(str(changed_files))

    # Save new snapshot after processing
    save_snapshot(snapshot_file, new_snapshot)