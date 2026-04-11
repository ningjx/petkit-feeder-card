const fs = require('fs');
const path = require('path');

const outputDir = process.env.BUILD_DIR || 'tmp';
const localizeDir = path.join(outputDir, 'localize');
const srcLocalizeDir = path.join(__dirname, '..', 'src', 'localize');

if (!fs.existsSync(localizeDir)) {
  fs.mkdirSync(localizeDir, { recursive: true });
}

const files = ['zh.json', 'en.json'];
files.forEach(file => {
  const src = path.join(srcLocalizeDir, file);
  const dest = path.join(localizeDir, file);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} to ${dest}`);
});