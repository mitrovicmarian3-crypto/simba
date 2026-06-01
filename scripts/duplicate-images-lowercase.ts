import * as fs from 'fs';
import * as path from 'path';

const publicDir = path.resolve('public/images');

function duplicateToLowercase(dir: string) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      duplicateToLowercase(fullPath);
    } else if (entry.isFile()) {
      const lowerName = entry.name.toLowerCase();
      if (lowerName !== entry.name) {
        const targetPath = path.join(dir, lowerName);
        if (!fs.existsSync(targetPath)) {
          console.log(`Copying: ${fullPath} -> ${targetPath}`);
          fs.copyFileSync(fullPath, targetPath);
        } else {
          console.log(`Skipping (already exists): ${lowerName}`);
        }
      }
    }
  }
}

duplicateToLowercase(publicDir);
console.log("Completed duplicating images to lowercase.");
