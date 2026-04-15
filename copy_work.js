import fs from 'fs';
import path from 'path';

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

files.forEach(file => {
  if (file.startsWith('whatsapp-') && file.endsWith('.jpeg')) {
    const workFileName = file.replace('whatsapp-', 'work-');
    fs.copyFileSync(
      path.join(publicDir, file),
      path.join(publicDir, workFileName)
    );
  }
});
console.log('Copied whatsapp images to work images.');
