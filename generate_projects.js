const fs = require('fs');

const categories = ["مطابخ", "غرف نوم", "أبواب", "ديكورات"];
const projects = [];
let id = 1;

for (let i = 1; i <= 35; i++) {
  projects.push({
    id: id++,
    title: `مشروع ${id}`,
    category: categories[i % categories.length],
    image: `/whatsapp-${i}.jpeg`,
    location: "الرياض",
    year: "2024",
    description: `تصميم وتنفيذ ${categories[i % categories.length]} بأعلى معايير الجودة.`
  });
}

for (let i = 1; i <= 35; i++) {
  projects.push({
    id: id++,
    title: `مشروع ${id}`,
    category: categories[i % categories.length],
    image: `/work-${i}.jpeg`,
    location: "الرياض",
    year: "2024",
    description: `تصميم وتنفيذ ${categories[i % categories.length]} بأعلى معايير الجودة.`
  });
}

fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2));
