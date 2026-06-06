const fs = require('fs');
const path = require('path');

const projectDir = 'C:\\Users\\Invisible\\Desktop\\NexusAI-website';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

console.log('Searching for "vercel" in ' + projectDir);

walkDir(projectDir, (filePath) => {
  const ext = path.extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.txt', '.css', '.html'].includes(ext)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.toLowerCase().includes('vercel')) {
    console.log(`Found in: ${filePath}`);
    // Print lines containing vercel
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.toLowerCase().includes('vercel')) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
