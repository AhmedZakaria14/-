const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Remove from head
content = content.replace(/<noscript><img height="1" width="1" style="display:none"\s*src="https:\/\/www.facebook.com\/tr\?id=1255551946554476&ev=PageView&noscript=1"\s*\/>\s*<\/noscript>/, '');

const noscriptCode = `
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1255551946554476&ev=PageView&noscript=1"
/></noscript>
`;

content = content.replace(/<body([^>]*)>/, '<body$1>' + noscriptCode);
fs.writeFileSync('index.html', content, 'utf8');
console.log('Fixed pixel location.');
