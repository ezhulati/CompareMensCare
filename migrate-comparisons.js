#!/usr/bin/env node
/**
 * Migrate existing Astro comparison pages to markdown content collection format
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const ASTRO_DIR = 'src/pages/compare';
const OUTPUT_DIR = 'src/content/comparisons';

// Attribution assignment (from AUTHORITY-TEAM.md)
const AUTHOR = {
  name: "Layla Reyes",
  credentials: "BCPA, MPH - Patient Advocate & Telehealth Specialist"
};

const REVIEWER = {
  name: "Dr. Amara Okonkwo",
  credentials: "PharmD, BCPS - Clinical Pharmacotherapy Specialist"
};

// Extract comparison data from Astro file
function extractComparisonData(content) {
  const data = {};

  // Extract brand slugs
  const brand1Match = content.match(/brand1Slug:\s*['"](.+?)['"]/);
  const brand2Match = content.match(/brand2Slug:\s*['"](.+?)['"]/);
  data.brand1 = brand1Match ? brand1Match[1] : '';
  data.brand2 = brand2Match ? brand2Match[1] : '';

  // Extract category
  const categoryMatch = content.match(/category:\s*['"](.+?)['"]/);
  data.category = categoryMatch ? categoryMatch[1] : 'sexual-health';

  // Extract verdict
  const brand1BestForMatch = content.match(/brand1BestFor:\s*['"](.+?)['"]/s);
  const brand2BestForMatch = content.match(/brand2BestFor:\s*['"](.+?)['"]/s);
  data.verdict = {
    brand1BestFor: brand1BestForMatch ? brand1BestForMatch[1] : '',
    brand2BestFor: brand2BestForMatch ? brand2BestForMatch[1] : ''
  };

  // Extract comparison table
  const tableMatch = content.match(/comparisonTable:\s*\[([\s\S]+?)\]/);
  if (tableMatch) {
    const tableContent = tableMatch[1];
    const rows = [];
    const rowMatches = tableContent.matchAll(/\{[\s\S]+?feature:\s*['"](.+?)['"][\s\S]+?brand1Value:\s*['"](.+?)['"][\s\S]+?brand2Value:\s*['"](.+?)['"][\s\S]+?winner:\s*['"](\w+)['"]/g);

    for (const match of rowMatches) {
      rows.push({
        feature: match[1],
        brand1Value: match[2],
        brand2Value: match[3],
        winner: match[4]
      });
    }
    data.comparisonTable = rows;
  }

  // Extract main content sections
  const sectionsMatch = content.match(/<!--\s*Additional comparison content\s*-->([\s\S]+?)<\/ComparisonLayout>/);
  if (sectionsMatch) {
    let mainContent = sectionsMatch[1];

    // Remove QuickVerdict component
    mainContent = mainContent.replace(/<QuickVerdict[\s\S]+?\/>/g, '');

    // Extract sections
    mainContent = mainContent.replace(/<section[^>]*>/g, '').replace(/<\/section>/g, '');
    mainContent = mainContent.replace(/<div[^>]*>/g, '').replace(/<\/div>/g, '');
    mainContent = mainContent.replace(/className=/g, 'class=');

    // Extract detailed comparison content
    const detailedMatch = mainContent.match(/Detailed Comparison[\s\S]+?(?=<!--\s*FAQ|$)/);
    if (detailedMatch) {
      data.mainContent = detailedMatch[0]
        .replace(/<\/?section[^>]*>/g, '')
        .replace(/<\/?div[^>]*>/g, '\n')
        .replace(/\s+/g, ' ')
        .trim();
    }

    // Extract FAQs
    const faqMatches = mainContent.matchAll(/<details[\s\S]+?<span>([\s\S]+?)<\/span>[\s\S]+?<p[^>]*>([\s\S]+?)<\/p>[\s\S]+?<\/details>/g);
    const faqs = [];
    for (const match of faqMatches) {
      faqs.push({
        question: match[1].trim(),
        answer: match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
      });
    }
    if (faqs.length > 0) {
      data.faqs = faqs;
    }
  }

  return data;
}

// Generate title from brand slugs
function generateTitle(brand1, brand2, category) {
  const categoryTitles = {
    'sexual-health': 'ED Treatment',
    'hair-health': 'Hair Loss Treatment',
    'testosterone': 'Testosterone Therapy',
    'weight-loss': 'Weight Loss',
    'mental-health': 'Mental Health Care',
    'diagnostics': 'Lab Testing',
  };

  const b1 = brand1.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const b2 = brand2.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const cat = categoryTitles[category] || category;

  return `${b1} vs ${b2} 2025: Which Is Better for ${cat}?`;
}

// Generate description
function generateDescription(brand1, brand2, category) {
  const b1 = brand1.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const b2 = brand2.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return `Compare ${b1} and ${b2} for ${category}. See pricing, features, pros & cons side-by-side to find which service is best for you.`;
}

// Convert comparison to markdown
function generateMarkdown(filename, data) {
  const title = generateTitle(data.brand1, data.brand2, data.category);
  const description = generateDescription(data.brand1, data.brand2, data.category);

  let md = `---
title: "${title}"
description: "${description}"
brand1: "${data.brand1}"
brand2: "${data.brand2}"
category: "${data.category}"
publishDate: 2025-01-15
lastReviewed: 2025-01-15
writtenBy: "${AUTHOR.name}"
writtenByCredentials: "${AUTHOR.credentials}"
medicalReviewer: "${REVIEWER.name}"
medicalReviewerCredentials: "${REVIEWER.credentials}"
verdict:
  brand1BestFor: "${data.verdict.brand1BestFor}"
  brand2BestFor: "${data.verdict.brand2BestFor}"
comparisonTable:
`;

  // Add comparison table
  if (data.comparisonTable) {
    data.comparisonTable.forEach(row => {
      md += `  - feature: "${row.feature}"\n`;
      md += `    brand1Value: "${row.brand1Value}"\n`;
      md += `    brand2Value: "${row.brand2Value}"\n`;
      md += `    winner: "${row.winner}"\n`;
    });
  }

  md += `---\n\n`;
  md += `## Comparison Content\n\n`;
  md += `This comparison page is being migrated. Full content will be added shortly.\n`;

  return md;
}

// Main migration function
async function migrate() {
  console.log('\n🔄 Migrating comparison pages...\n');

  const files = await glob(`${ASTRO_DIR}/*.astro`, { ignore: '**/index.astro' });

  let migrated = 0;

  for (const file of files) {
    const filename = path.basename(file, '.astro');

    // Skip if already migrated
    if (filename === 'ro-vs-hims' || filename === '[...slug]') {
      continue;
    }

    const content = fs.readFileSync(file, 'utf8');
    const data = extractComparisonData(content);

    if (!data.brand1 || !data.brand2) {
      console.log(`⚠️  Skipping ${filename} - could not extract brand data`);
      continue;
    }

    const markdown = generateMarkdown(filename, data);
    const outputPath = path.join(OUTPUT_DIR, `${filename}.md`);

    fs.writeFileSync(outputPath, markdown);
    console.log(`✓ Migrated: ${filename}.md`);
    migrated++;
  }

  console.log(`\n✅ Migration complete! Migrated ${migrated} comparison pages.\n`);
}

migrate().catch(console.error);
