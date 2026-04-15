import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800&q=80', // carpenter
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', // kitchen
  'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80', // bedroom
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', // room
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', // house
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', // door
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80', // decor
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80', // interior
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', // living room
  'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80'  // furniture
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const publicDir = path.join(process.cwd(), 'public');
  
  for (let i = 1; i <= 35; i++) {
    const imgUrl = images[i % images.length];
    
    const whatsappName = path.join(publicDir, `whatsapp-${i}.jpeg`);
    const workName = path.join(publicDir, `work-${i}.jpeg`);
    
    try {
      await download(imgUrl, whatsappName);
      fs.copyFileSync(whatsappName, workName);
      console.log(`Downloaded and copied image ${i}`);
    } catch (e) {
      console.error(`Error downloading image ${i}:`, e);
    }
  }
}

run();
