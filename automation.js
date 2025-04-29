// automation.js - Convert Word documents to Markdown and extract all images

const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

// Configuration
const CONFIG = {
  sourceDir: './docs/word',        // Word documents directory
  outputDir: './docs/markdown',    // Markdown output directory
  imageDir: './docs/images',       // Image output directory
  imageRefPrefix: '/images/'       // Image reference path prefix
};

/**
 * Process all Word documents
 */
async function convertAllDocuments() {
  // Ensure output directories exist
  ensureDirectoryExists(CONFIG.outputDir);
  ensureDirectoryExists(CONFIG.imageDir);
  
  // Get all .docx files
  const docFiles = fs.readdirSync(CONFIG.sourceDir)
    .filter(file => file.endsWith('.docx'))
    .map(file => path.join(CONFIG.sourceDir, file));
  
  console.log(`Found ${docFiles.length} Word documents`);
  
  // Process each document
  for (const docFile of docFiles) {
    await processDocument(docFile);
  }
  
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
      convertImage: mammoth.images.imgElement(imageBuffer => {
        return saveAndReturnImageInfo(imageBuffer, fileName);
      })
    });
    
    let markdown = result.value;
    
    // If no title in document, add a title based on filename
    if (!markdown.trim().startsWith('# ')) {
      const title = fileName.replace(/-/g, ' ')
                           .replace(/_/g, ' ')
                           .replace(/\b\w/g, l => l.toUpperCase());
      markdown = `# ${title}\n\n${markdown}`;
    }
    
    // Write the final Markdown file
    const outputPath = path.join(CONFIG.outputDir, `${fileName}.md`);
    fs.writeFileSync(outputPath, markdown);
    
    console.log(`Successfully converted "${fileName}" to Markdown and extracted images`);
  } catch (error) {
    console.error(`Error processing ${fileName}: ${error.message}`);
  }
}

/**
 * Save image and return image information
 * @param {Buffer} imageBuffer - Image data
 * @param {string} docName - Document name (for creating unique image names)
 */
function saveAndReturnImageInfo(imageBuffer, docName) {
  // Get image MIME type
  const mime = imageBuffer.type;
  const extension = mime.split('/')[1];
  
  // Create unique image filename
  const timestamp = new Date().getTime();
  const imageName = `${docName}-image-${timestamp}.${extension}`;
  const imagePath = path.join(CONFIG.imageDir, imageName);
  
  // Save the image file
  fs.writeFileSync(imagePath, imageBuffer);
  
  // Return information needed for Markdown image reference
  return {
    src: `${CONFIG.imageRefPrefix}${imageName}`,
    alt: `Image from ${docName}`
  };
}

/**
 * Ensure directory exists, create if needed
 * @param {string} dir - Directory path
 */
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Run the conversion
convertAllDocuments().catch(console.error);