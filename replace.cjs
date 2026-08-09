const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/201010742430/g, '201551184914');
  content = content.replace(/\+20 10 10742430/g, '+20 15 51184914');
  content = content.replace(/\+201010742430/g, '+201551184914');
  fs.writeFileSync(filePath, content, 'utf8');
}

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

files.forEach(file => {
  if (fs.existsSync(file)) {
    replaceInFile(file);
    console.log('Replaced in: ' + file);
  }
});
