# diagram_recognition.py - Script to detect and convert flow charts to Mermaid syntax

import sys
import cv2
import numpy as np
import pytesseract
from PIL import Image

def is_diagram(image_path):
    """
    Determine if an image is likely a flow chart diagram
    
    Args:
        image_path (str): Path to the image file
        
    Returns:
        bool: True if the image appears to be a diagram, False otherwise
    """
    # Load image
    img = cv2.imread(image_path)
    if img is None:
        print("Error: Could not read image", file=sys.stderr)
        return False
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply threshold to get binary image
    _, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)
    
    # Find contours
    contours, _ = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    
    # Look for characteristic shapes (rectangles, diamonds, etc.)
    shape_count = 0
    for contour in contours:
        # Approximate contour to polygon
        epsilon = 0.04 * cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, epsilon, True)
        
        # Count only shapes with appropriate size (to filter out noise)
        area = cv2.contourArea(contour)
        if area < 500:  # Skip tiny contours
            continue
        
        # Count shapes with 4-6 sides (rectangles, diamonds, etc.)
        if 3 <= len(approx) <= 6:
            shape_count += 1
    
    # Look for lines that might be connectors
    edges = cv2.Canny(gray, 50, 150, apertureSize=3)
    lines = cv2.HoughLinesP(edges, 1, np.pi/180, threshold=50, minLineLength=40, maxLineGap=10)
    line_count = 0 if lines is None else len(lines)
    
    # Heuristic: If we have some shapes and lines, it's likely a diagram
    is_diagram = shape_count >= 2 and line_count >= 2
    
    return is_diagram

def convert_to_mermaid(image_path):
    """
    Convert a flow chart image to Mermaid syntax
    
    Args:
        image_path (str): Path to the image file
        
    Returns:
        str: Mermaid diagram code
    """
    # Load image
    img = cv2.imread(image_path)
    if img is None:
        return "graph TD\nA[Error: Could not read image]"
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply threshold to get binary image
    _, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)
    
    # Find contours
    contours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    
    # Initialize diagram components
    nodes = []
    connections = []
    
    # Process shapes (nodes)
    for i, contour in enumerate(contours):
        # Skip very small contours
        area = cv2.contourArea(contour)
        if area < 500:
            continue
        
        # Approximate shape
        epsilon = 0.04 * cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, epsilon, True)
        
        # Get bounding rectangle
        x, y, w, h = cv2.boundingRect(contour)
        
        # Extract shape type
        shape_type = "default"
        if len(approx) == 4:
            # Check if it's a square or rectangle
            aspect_ratio = float(w) / h
            if 0.9 <= aspect_ratio <= 1.1:
                shape_type = "square"
            else:
                shape_type = "rectangle"
        elif len(approx) == 3:
            shape_type = "triangle"
        elif len(approx) == 5:
            shape_type = "pentagon"
        elif len(approx) == 6:
            shape_type = "hexagon"
        
        # Extract text using OCR
        roi = gray[y:y+h, x:x+w]
        text = pytesseract.image_to_string(roi, config='--psm 11').strip()
        if not text:
            text = f"Node{i}"
        
        # Clean up text for Mermaid
        text = text.replace('\n', ' ').replace('"', "'")
        
        # Add node to list
        node_id = f"node{i}"
        
        # Map shape type to Mermaid syntax
        if shape_type == "rectangle":
            node_def = f"{node_id}[{text}]"
        elif shape_type == "diamond":
            node_def = f"{node_id}{{{text}}}"
        elif shape_type == "circle" or shape_type == "square":
            node_def = f"{node_id}(({text}))"
        else:
            node_def = f"{node_id}[{text}]"
            
        nodes.append((node_id, node_def, (x+w/2, y+h/2)))  # Store node ID, definition, and center point
    
    # Detect connections between nodes
    edges = cv2.Canny(gray, 50, 150, apertureSize=3)
    lines = cv2.HoughLinesP(edges, 1, np.pi/180, threshold=50, minLineLength=40, maxLineGap=10)
    
    if lines is not None:
        for line in lines:
            x1, y1, x2, y2 = line[0]
            
            # Find closest nodes to line endpoints
            start_node = min(nodes, key=lambda n: (n[2][0]-x1)**2 + (n[2][1]-y1)**2)
            end_node = min(nodes, key=lambda n: (n[2][0]-x2)**2 + (n[2][1]-y2)**2)
            
            # Skip self-connections
            if start_node[0] == end_node[0]:
                continue
                
            # Add connection
            connections.append(f"{start_node[0]} --> {end_node[0]}")
    
    # Generate Mermaid code
    mermaid = "graph TD\n"
    mermaid += "\n".join(n[1] for n in nodes)
    mermaid += "\n" + "\n".join(set(connections))  # Use set to remove duplicates
    
    return mermaid

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python diagram_recognition.py <image_path>", file=sys.stderr)
        sys.exit(1)
        
    image_path = sys.argv[1]
    
    # Detect if image is a diagram
    if is_diagram(image_path):
        print("diagram")
        # If you want to output the converted Mermaid code as well:
        # mermaid_code = convert_to_mermaid(image_path)
        # print(mermaid_code)
    else:
        print("not_diagram")