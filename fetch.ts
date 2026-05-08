import { chromium } from 'playwright';
import fs from 'fs';

async function fetchHTML() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://al-nashar-marketing-agency-198547802462.us-west1.run.app');
  await page.waitForTimeout(5000); // Wait for React to render
  const html = await page.content();
  fs.writeFileSync('rendered.html', html);
  await browser.close();
}

fetchHTML();
