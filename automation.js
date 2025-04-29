// automation.js - Main script for converting Word docs with BMP flow charts to Markdown with Mermaid diagrams

const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  sourceDir: './docs/word',        // Directory containing Word documents
  outputDir: './docs/markdown',    // Output directory for markdown files
  tempDir: './temp',               // Temporary directory for extracted images
  imageRecognitionScript: './scripts/diagram_recognition.py'  // Python script for diagram detection
};

/**
 * Main function to process all Word documents in the source directory
 */
async function convertAllDocuments() {
  // Ensure output directories exist
  ensureDirectoryExists(CONFIG.outputDir);
  ensureDirectoryExists(CONFIG.tempDir);
  
  // Get all .docx files
  const docFiles = fs.readdirSync(CONFIG.sourceDir)
    .filter(file => file.endsWith('.docx'))
    .map(file => path.join(CONFIG.sourceDir, file));
  
  console.log(`Found ${docFiles.length} Word documents to process`);
  
  // Process each document
  for (const docFile of docFiles) {
    await processDocument(docFile);
  }
  
  // Clean up temporary files
  fs.rmSync(CONFIG.tempDir, { recursive: true, force: true });
  console.log('Conversion complete!');
}

/**
 * Process a single Word document
 * @param {string} filePath - Path to the Word document
 */
async function processDocument(filePath) {
  const fileName = path.basename(filePath, '.docx');
  console.log(`Processing document: ${fileName}`);
  
  try {
    // Extract text and images from Word document
    const result = await mammoth.convertToMarkdown({
      path: filePath,
      extractImages: {
        directory: CONFIG.tempDir
      }
    });
    
    let markdown = result.value;
    const imageRefs = {};
    
    // Process extracted images
    const images = result.images || [];
    for (const image of images) {
      // Check if this image might be a diagram
      const isDiagram = await detectDiagram(image.path);
      
      if (isDiagram) {
        // Convert diagram to Mermaid
        const mermaidCode = await convertDiagramToMermaid(image.path);
        imageRefs[image.id] = {
          type: 'mermaid',
          code: mermaidCode
        };
      } else {
        // For regular images, we'll use markdown image links
        // In a real system, you might want to store these as separate files
        imageRefs[image.id] = {
          type: 'regular',
          path: path.basename(image.path)
        };
      }
    }
    
    // Replace image references with either Mermaid diagrams or image links
    for (const id in imageRefs) {
      const ref = imageRefs[id];
      if (ref.type === 'mermaid') {
        markdown = markdown.replace(
          new RegExp(`!\\[.*?\\]\\(${id}\\)`, 'g'),
          `\n\`\`\`mermaid\n${ref.code}\n\`\`\`\n`
        );
      } else {
        // For regular images (if you're keeping them)
        markdown = markdown.replace(
          new RegExp(`!\\[.*?\\]\\(${id}\\)`, 'g'),
          `![Image](${ref.path})`
        );
      }
    }
    
    // Add frontmatter with metadata
    const frontmatter = generateFrontmatter(fileName);
    markdown = `${frontmatter}\n\n${markdown}`;
    
    // Write the final markdown file
    const outputPath = path.join(CONFIG.outputDir, `${fileName}.md`);
    fs.writeFileSync(outputPath, markdown);
    
    console.log(`Successfully converted "${fileName}" to Markdown with Mermaid diagrams`);
  } catch (error) {
    console.error(`Error processing ${fileName}: ${error.message}`);
  }
}

/**
 * Detect if an image is likely to be a diagram
 * @param {string} imagePath - Path to the image file
 * @returns {Promise<boolean>} - Whether the image appears to be a diagram
 */
async function detectDiagram(imagePath) {
  try {
    // Call the Python script that uses computer vision to detect diagrams
    // This is a placeholder - you'd need to implement the actual detection logic
    const result = execSync(`python ${CONFIG.imageRecognitionScript} "${imagePath}"`).toString().trim();
    return result === 'diagram';
  } catch (error) {
    console.warn(`Warning: Diagram detection failed for ${imagePath}. Treating as regular image.`);
    return false;
  }
}

/**
 * Convert a diagram image to Mermaid code
 * @param {string} imagePath - Path to the diagram image
 * @returns {Promise<string>} - Generated Mermaid code
 */
async function convertDiagramToMermaid(imagePath) {
  // This is where you'd implement diagram recognition and conversion
  // For simple flows, you might use a tool like OpenCV in Python to detect shapes and connections
  
  // This is a placeholder - in a real implementation you would:
  // 1. Use computer vision to detect shapes (rectangles, diamonds, etc.)
  // 2. Detect connections between shapes
  // 3. Use OCR to extract text within shapes
  // 4. Generate appropriate Mermaid code
  
  // For now, we'll return a simple placeholder diagram
  return `graph TD
    A[Start] --> B{Decision?}
    B -->|Yes| C[Process 1]
    B -->|No| D[Process 2]
    C --> E[End]
    D --> E`;
}

/**
 * Generate frontmatter with metadata for the markdown file
 * @param {string} title - Document title
 * @returns {string} - YAML frontmatter
 */
function generateFrontmatter(title) {
  const now = new Date();
  return `---
title: ${title}
date: ${now.toISOString().split('T')[0]}
lastUpdated: ${now.toISOString()}
author: Automated Conversion
originalFormat: Word
---`;
}

/**
 * Ensure a directory exists, creating it if necessary
 * @param {string} dir - Directory path
 */
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Run the conversion
convertAllDocuments().catch(console.error);