/**
 * This script fixes image paths in Markdown files for MkDocs compatibility
 * It updates absolute image paths to relative paths that work with MkDocs structure
 */

const fs = require('fs');
const path = require('path');

const MARKDOWN_DIR = './docs/markdown';

/**
 * Fix image paths in all Markdown files in the specified directory
 */
function fixImagePaths() {
  // Get all Markdown files
  const files = fs.readdirSync(MARKDOWN_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(MARKDOWN_DIR, file));
  
  console.log(`Found ${files.length} Markdown files to process`);
  
  // Process each file
  for (const file of files) {
    try {
      console.log(`Processing file: ${path.basename(file)}`);
      
      // Read file content
      let content = fs.readFileSync(file, 'utf8');
      
      // Replace image paths
      // Change from "/images/..." to "../images/..."
      const updatedContent = content.replace(/!\[([^\]]*)\]\(\/images\//g, '![$1](../images/');
      
      // Write updated content back to file
      fs.writeFileSync(file, updatedContent);
      
      console.log(`Updated image paths in ${path.basename(file)}`);
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  }
  
  console.log('All image paths updated for MkDocs compatibility');
}

// Run the function
fixImagePaths();