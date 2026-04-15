const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);
let imgCounter = 1;
let vidCounter = 1;

files.forEach(file => {
  if (file.startsWith('WhatsApp Image')) {
    const ext = path.extname(file);
    fs.renameSync(
      path.join(__dirname, file),
      path.join(__dirname, 'public', `whatsapp-${imgCounter}${ext}`)
    );
    imgCounter++;
  } else if (file.startsWith('WhatsApp Video')) {
    const ext = path.extname(file);
    fs.renameSync(
      path.join(__dirname, file),
      path.join(__dirname, 'public', `whatsapp-vid-${vidCounter}${ext}`)
    );
    vidCounter++;
  }
});
console.log(`Moved ${imgCounter - 1} images and ${vidCounter - 1} videos.`);
