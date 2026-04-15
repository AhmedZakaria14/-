import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const searchDirs = [rootDir, '/'];

let imgCounter = 1;
let vidCounter = 1;

for (const dir of searchDirs) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (file.startsWith('WhatsApp Image') && file.endsWith('.jpeg')) {
        const newName = `whatsapp-${imgCounter}.jpeg`;
        fs.copyFileSync(path.join(dir, file), path.join(publicDir, newName));
        fs.copyFileSync(path.join(dir, file), path.join(publicDir, `work-${imgCounter}.jpeg`));
        console.log(`Copied ${file} to ${newName} and work-${imgCounter}.jpeg`);
        imgCounter++;
      } else if (file.startsWith('WhatsApp Video') && file.endsWith('.mp4')) {
        const newName = `whatsapp-vid-${vidCounter}.mp4`;
        fs.copyFileSync(path.join(dir, file), path.join(publicDir, newName));
        console.log(`Copied ${file} to ${newName}`);
        vidCounter++;
      }
    });
  } catch (e) {
    console.error(`Error reading ${dir}:`, e.message);
  }
}

console.log(`Total processed: ${imgCounter - 1} images, ${vidCounter - 1} videos.`);
