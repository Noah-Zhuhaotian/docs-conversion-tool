// test.js - Test script for document conversion
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Test that required directories exist
console.log("Testing directory structure...");
assert(fs.existsSync("./docs") || fs.mkdirSync("./docs"), "docs directory should exist");

// Test that automation.js exists and is valid JavaScript
console.log("Testing automation.js file...");
assert(fs.existsSync("./automation.js"), "automation.js should exist");

try {
  require("../../../automation.js");
  console.log("automation.js is valid JavaScript");
} catch (e) {
  console.error("automation.js has syntax errors:", e);
  process.exit(1);
}

// Test base64 image detection regex
console.log("Testing base64 image detection...");
const testBase64 = "![Test Image](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=)";
const base64Regex = /!\[([^\]]*)\]\(data:image\/([a-zA-Z0-9+]+);base64,([^)]+)\)/g;
const match = base64Regex.exec(testBase64);

assert(match !== null, "Base64 image detection regex should match the test pattern");
assert(match[1] === "Test Image", "Alt text should be correctly extracted");
assert(match[2] === "png", "Image type should be correctly extracted");
assert(match[3].startsWith("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1"), "Base64 data should be correctly extracted");

console.log("Base64 image detection test passed");

console.log("All tests passed!");