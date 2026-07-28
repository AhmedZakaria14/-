import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/blog.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Let's inspect each post in content and clean up headings vs TOC
// Post 2: "Step-by-Step Guide to Creating a Google Ad Without Wasting Your Budget"
// Post 3: "How to Create a Google Ad That Reaches the Right Audience and Drives Engagement"
// Post 4: "Steps to Create a Google Ad Correctly and Avoid Common Beginner Mistakes"

console.log("Original content length:", content.length);
