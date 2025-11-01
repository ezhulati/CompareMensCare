#!/usr/bin/env node
/**
 * Clean up duplicate keys from frontmatter
 * Removes old medicalReviewer and author fields that are before the new attribution fields
 */

import fs from 'fs';
import { glob } from 'glob';

async function cleanupFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let inFrontmatter = false;
  let foundNewAttribution = false;
  const cleanedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track frontmatter boundaries
    if (line.trim() === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
        cleanedLines.push(line);
        continue;
      } else {
        // End of frontmatter
        cleanedLines.push(line);
        // Add all remaining lines
        cleanedLines.push(...lines.slice(i + 1));
        break;
      }
    }

    if (inFrontmatter) {
      // Check if we've reached the new attribution fields
      if (line.startsWith('writtenBy:')) {
        foundNewAttribution = true;
      }

      // Skip old author/medicalReviewer fields that come BEFORE new attribution
      if (!foundNewAttribution && (
        line.startsWith('author:') ||
        (line.startsWith('medicalReviewer:') && !line.includes('medicalReviewerCredentials'))
      )) {
        console.log(`  Removing old field: ${line.trim()}`);
        continue; // Skip this line
      }
    }

    cleanedLines.push(line);
  }

  fs.writeFileSync(filePath, cleanedLines.join('\n'));
}

(async () => {
  console.log('\n🧹 Cleaning up duplicate keys...\n');

  const allFiles = [
    ...(await glob('src/content/guides/*.md')),
    ...(await glob('src/content/blog/*.md')),
    ...(await glob('src/content/brands/*.md'))
  ];

  for (const file of allFiles) {
    console.log(`Checking: ${file}`);
    await cleanupFile(file);
  }

  console.log('\n✅ Cleanup complete!');
})();
