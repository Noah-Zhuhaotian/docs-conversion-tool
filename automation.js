// automation.js - Document conversion tool with base64 image handling

const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const fsExtra = require('fs-extra');

// Configuration
const CONFIG = {
  sourceDir: './docs/word',        // Directory for Word documents
  outputDir: './docs/markdown',    // Output directory for Markdown files
  imageDir: './docs/images',       // Output directory for images
  tempDir: './temp'                // Temporary directory
};

/**
 * Main function - Process all Word documents
 */
async function convertAllDocuments() {
  // Ensure all directories exist
  ensureDirectoryExists(CONFIG.outputDir);
  ensureDirectoryExists(CONFIG.imageDir);
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
    // Create a separate image directory for each document
    const documentImageDir = path.join(CONFIG.imageDir, fileName);
    ensureDirectoryExists(documentImageDir);
    
    // Extract text and images
    const result = await mammoth.convertToMarkdown({
      path: filePath,
      extractImages: {
        directory: CONFIG.tempDir
      }
    });
    
    let markdown = result.value;
    const messages = result.messages;
    
    // Process extracted images
    if (result.images && result.images.length > 0) {
      console.log(`Extracted ${result.images.length} images from ${fileName}`);
      
      // Copy images to final directory and update Markdown references
      for (const image of result.images) {
        const extension = path.extname(image.path) || '.png';
        const imageName = `image-${path.basename(image.id)}${extension}`;
        const finalImagePath = path.join(documentImageDir, imageName);
        
        // Copy image file
        fsExtra.copySync(image.path, finalImagePath);
        
        // Update image reference in Markdown
        // Use relative path for proper display in GitHub
        const relativeImagePath = path.relative(
          CONFIG.outputDir,
          finalImagePath
        ).replace(/\\/g, '/'); // Ensure path separators are forward slashes
        
        markdown = markdown.replace(
          new RegExp(`!\\[[^\\]]*\\]\\(${image.id}\\)`, 'g'),
          `![${imageName}](${relativeImagePath})`
        );
      }
    }
    
    // Process base64 encoded images
    markdown = await processBase64Images(markdown, documentImageDir);
    
    // Add frontmatter
    const frontmatter = generateFrontmatter(fileName);
    markdown = `${frontmatter}\n\n${markdown}`;
    
    // Write the final Markdown file
    const outputPath = path.join(CONFIG.outputDir, `${fileName}.md`);
    fs.writeFileSync(outputPath, markdown);
    
    console.log(`Successfully converted "${fileName}" to Markdown with images`);
    
    // Display any warning or error messages
    if (messages.length > 0) {
      console.log('Messages during processing:');
      messages.forEach(message => {
        console.log(`- ${message.type}: ${message.message}`);
      });
    }
    
  } catch (error) {
    console.error(`Error processing ${fileName}: ${error.message}`);
  }
}

/**
 * Process base64 encoded images in markdown text
 * @param {string} markdown - Markdown text potentially containing base64 images
 * @param {string} imageDir - Directory to save extracted images
 * @returns {Promise<string>} - Updated markdown with file references
 */
async function processBase64Images(markdown, imageDir) {
  // Regular expression to find base64 encoded images
  const base64Regex = /!\[([^\]]*)\]\(data:image\/([a-zA-Z0-9+]+);base64,([^)]+)\)/g;
  
  let match;
  let imageIndex = 1;
  let updatedMarkdown = markdown;
  
  while ((match = base64Regex.exec(markdown)) !== null) {
    const [fullMatch, altText, imageType, base64Data] = match;
    
    // Create file name and path
    const imageName = `base64-image-${imageIndex}.${imageType}`;
    const imagePath = path.join(imageDir, imageName);
    
    try {
      // Decode base64 and save as file
      const imageBuffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(imagePath, imageBuffer);
      
      // Create relative path for markdown
      const relativeImagePath = path.relative(
        CONFIG.outputDir,
        imagePath
      ).replace(/\\/g, '/');
      
      // Replace base64 data with file reference
      updatedMarkdown = updatedMarkdown.replace(
        fullMatch,
        `![${altText || imageName}](${relativeImagePath})`
      );
      
      console.log(`Extracted base64 image to: ${imageName}`);
      imageIndex++;
    } catch (error) {
      console.error(`Error processing base64 image: ${error.message}`);
    }
  }
  
  return updatedMarkdown;
}

/**
 * Generate frontmatter for markdown file
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
 * Ensure directory exists, create if necessary
 * @param {string} dir - Directory path
 */
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Run the conversion
convertAllDocuments().catch(console.error);