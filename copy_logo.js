const fs = require('fs');
const path = require('path');
fs.copyFileSync(path.join(__dirname, 'public', 'logo.png'), path.join(__dirname, 'app', 'icon.png'));
console.log('Copied logo.png to icon.png');
