const fs = require('fs');

const files = [
  'src/components/PaidAdsServices.tsx',
  'src/components/Footer.tsx',
  'src/components/Contact.tsx',
  'src/components/Services.tsx',
  'src/components/SEOServices.tsx',
  'src/components/WebsiteOnboarding.tsx',
  'src/components/SaudiLandingPage.tsx',
  'src/components/PlatformDetail.tsx',
  'src/components/CityLandingPage.tsx',
  'src/components/GlobalCTA.tsx',
  'src/components/SnapchatWebDev.tsx',
  'src/components/BottomNav.tsx',
  'src/components/MobileStickyBar.tsx',
  'src/components/WebDevServices.tsx'
];

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the wa.me dynamic contact numbers first
  content = content.replace(/wa\.me\/\$\{CONTACT_NUMBER\.replace\(\/\[\\s\+\]\/g, ''\)\}/g, 'wa.me/201010742430');
  content = content.replace(/wa\.me\/\$\{CONTACT_NUMBER\.replace\(\/\\s\/g, ''\)\}/g, 'wa.me/201010742430');
  
  // Replace the actual numbers
  content = content.replace(/201551184914/g, '201010742430');
  content = content.replace(/\+20 15 51184914/g, '01010742430');
  content = content.replace(/\+201551184914/g, '01010742430');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

files.forEach(replaceInFile);
console.log('Numbers replaced!');
