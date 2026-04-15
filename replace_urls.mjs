import fs from 'fs';
import path from 'path';

const oldUrl = 'https://generated-198547802462.us-west1.run.app';
const newUrl = 'https://najjarriyadh.com';

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(oldUrl)) {
    const newContent = content.replaceAll(oldUrl, newUrl);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        walkDir(filePath);
      }
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      replaceInFile(filePath);
    }
  }
}

walkDir(path.join(process.cwd(), 'app'));
walkDir(path.join(process.cwd(), 'lib'));
console.log('Done replacing URLs.');
