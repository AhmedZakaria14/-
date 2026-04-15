import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');

let imgCounter = 1;
let vidCounter = 1;

try {
  const files = fs.readdirSync(rootDir);
  files.forEach(file => {
    if (file.startsWith('WhatsApp Image') && file.endsWith('.jpeg')) {
      const newName = `whatsapp-${imgCounter}.jpeg`;
      const workName = `work-${imgCounter}.jpeg`;
      
      // Copy to work-X.jpeg first
      fs.copyFileSync(path.join(rootDir, file), path.join(publicDir, workName));
      
      // Rename the original to whatsapp-X.jpeg
      fs.renameSync(path.join(rootDir, file), path.join(publicDir, newName));
      
      console.log(`Moved ${file} to ${newName} and copied to ${workName}`);
      imgCounter++;
    } else if (file.startsWith('WhatsApp Video') && file.endsWith('.mp4')) {
      const newName = `whatsapp-vid-${vidCounter}.mp4`;
      
      // Rename the original
      fs.renameSync(path.join(rootDir, file), path.join(publicDir, newName));
      
      console.log(`Moved ${file} to ${newName}`);
      vidCounter++;
    }
  });
} catch (e) {
  console.error(`Error:`, e.message);
}

console.log(`Total processed: ${imgCounter - 1} images, ${vidCounter - 1} videos.`);
