const fs = require('fs');

let originalContent = fs.readFileSync('src/components/PaidAdsServices.tsx', 'utf8');
const caseStudyStart = originalContent.indexOf('{/* Case Study Section */}');
const faqStart = originalContent.indexOf('{/* FAQ Section */}');

if (caseStudyStart !== -1 && faqStart !== -1) {
    const newContent = originalContent.slice(0, caseStudyStart) + originalContent.slice(faqStart);
    fs.writeFileSync('src/components/PaidAdsServices.tsx', newContent);
    console.log('Successfully removed case study from PaidAdsServices.tsx');
} else {
    console.log('Could not find sections in PaidAdsServices.tsx');
}
