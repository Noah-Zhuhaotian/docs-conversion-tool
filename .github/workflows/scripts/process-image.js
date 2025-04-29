// process-base64.js - Utility script to process base64 images in existing markdown files
const fs = require('fs');
const path = require('path');

// Get the markdown file path from command line arguments
const markdownFilePath = process.argv[2];

if (!markdownFilePath || !fs.existsSync(markdownFilePath)) {
  console.error(`Error: Invalid or missing markdown file path: ${markdownFilePath}`);
  process.exit(1);
}

// Configuration
const CONFIG = {
  outputDir: path.dirname(markdownFilePath), // Same directory as the markdown file
  imageDir: '../images',                    // Relative path to images directory
};

/**
 * Process a markdown file to extract base64 images
 */
async function processMarkdownFile() {
  console.log(`Processing markdown file: ${markdownFilePath}`);
  
  try {
    // Read the markdown file
    const markdown = fs.readFileSync(markdownFilePath, 'utf8');
    
    // Get the document name from file name
    const fileName = path.basename(markdownFilePath, '.md');
    
    // Create a separate image directory for the document
    const documentImageDir = path.join(path.dirname(markdownFilePath), '..', 'images', fileName);
    ensureDirectoryExists(documentImageDir);
    
    // Process base64 encoded images
    const updatedMarkdown = await processBase64Images(markdown, documentImageDir);
    
    // Only update if changes were made
    if (updatedMarkdown !== markdown) {
      // Write the updated markdown file
      fs.writeFileSync(markdownFilePath, updatedMarkdown);
      console.log(`Successfully processed base64 images in "${fileName}"`);
    } else {
      console.log(`No base64 images found in "${fileName}"`);
    }
    
  } catch (error) {
    console.error(`Error processing ${markdownFilePath}: ${error.message}`);
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
  let changes = false;
  
  while ((match = base64Regex.exec(markdown)) !== null) {
    changes = true;
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
        path.dirname(markdownFilePath),
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
  
  return changes ? updatedMarkdown : markdown;
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
processMarkdownFile().catch(console.error);