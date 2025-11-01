#!/usr/bin/env node
/**
 * Bulk update all content files with new dual attribution model
 *
 * Updates:
 * - All brand reviews → Layla Reyes (Patient Advocate)
 * - Clinical guides → Kai Nakano (Health Journalist)
 * - Policy guides → Henrik Johansson (Health Policy Analyst)
 * - Blog posts → Rotating between all 3
 * - All content → Dr. Amara Okonkwo (Medical Reviewer)
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Author profiles
const AUTHORS = {
  layla: {
    name: "Layla Reyes",
    credentials: "BCPA, MPH - Patient Advocate & Telehealth Specialist"
  },
  henrik: {
    name: "Henrik Johansson",
    credentials: "MPH - Health Policy Analyst"
  },
  kai: {
    name: "Kai Nakano",
    credentials: "Health Journalist & Men's Health Specialist"
  },
  medical_reviewer: {
    name: "Dr. Amara Okonkwo",
    credentials: "PharmD, BCPS - Clinical Pharmacotherapy Specialist"
  }
};

// Content assignment rules
const ASSIGNMENTS = {
  brands: 'layla', // All brand reviews
  guides: {
    // Clinical/treatment guides
    'understanding-erectile-dysfunction': 'kai',
    'sildenafil-vs-tadalafil': 'kai',
    'when-to-see-doctor-about-ed': 'kai',
    'premature-ejaculation-treatment-options': 'kai',
    'understanding-male-pattern-baldness': 'kai',
    'finasteride-vs-minoxidil': 'kai',
    'what-is-testosterone-replacement-therapy': 'kai',
    'how-to-get-testosterone-tested': 'kai',
    'glp1-medications-explained': 'kai',
    'peptides-complete-guide': 'kai',
    'herpes-treatment-online-complete-guide': 'kai',

    // Policy/insurance guides
    'does-insurance-cover-weight-loss-telehealth': 'henrik',

    // Mental health guides
    'teletherapy-vs-in-person': 'kai',
    'how-to-choose-online-therapist': 'kai',

    // Diagnostic guides
    'when-to-use-at-home-health-tests': 'henrik',

    // Sleep guide
    'insomnia-treatment-online': 'kai'
  },
  blog: [ // Rotating assignment
    'kai', 'henrik', 'layla', 'kai', 'henrik',
    'kai', 'layla', 'kai', 'henrik', 'kai',
    'layla', 'kai', 'henrik', 'kai', 'kai',
    'henrik', 'kai', 'layla', 'kai', 'henrik',
    'kai', 'kai', 'henrik', 'kai', 'layla'
  ]
};

function updateFrontmatter(content, writtenBy, medicalReviewer) {
  const lines = content.split('\n');
  let inFrontmatter = false;
  let frontmatterEnd = -1;
  let hasWrittenBy = false;
  let hasReviewer = false;

  // Find frontmatter boundaries
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        frontmatterEnd = i;
        break;
      }
    }

    if (inFrontmatter) {
      if (lines[i].startsWith('writtenBy:')) hasWrittenBy = true;
      if (lines[i].startsWith('medicalReviewer:') && !lines[i].includes('medicalReviewerCredentials:')) hasReviewer = true;
    }
  }

  if (frontmatterEnd === -1) {
    console.error('Could not find frontmatter end');
    return content;
  }

  // If already has new fields, just update them
  if (hasWrittenBy && hasReviewer) {
    return content
      .replace(/writtenBy:.*$/m, `writtenBy: "${writtenBy.name}"`)
      .replace(/writtenByCredentials:.*$/m, `writtenByCredentials: "${writtenBy.credentials}"`)
      .replace(/^medicalReviewer:(?!Credentials).*$/m, `medicalReviewer: "${medicalReviewer.name}"`)
      .replace(/medicalReviewerCredentials:.*$/m, `medicalReviewerCredentials: "${medicalReviewer.credentials}"`);
  }

  // Add new fields before the closing ---
  const newFields = [
    `writtenBy: "${writtenBy.name}"`,
    `writtenByCredentials: "${writtenBy.credentials}"`,
    `medicalReviewer: "${medicalReviewer.name}"`,
    `medicalReviewerCredentials: "${medicalReviewer.credentials}"`
  ];

  lines.splice(frontmatterEnd, 0, ...newFields);

  return lines.join('\n');
}

function processFile(filePath, authorKey) {
  const content = fs.readFileSync(filePath, 'utf8');
  const writtenBy = AUTHORS[authorKey];
  const medicalReviewer = AUTHORS.medical_reviewer;

  const updated = updateFrontmatter(content, writtenBy, medicalReviewer);
  fs.writeFileSync(filePath, updated);

  console.log(`✓ Updated: ${path.basename(filePath)} → ${writtenBy.name}`);
}

// Process all brands
(async () => {
  console.log('\n📦 Updating Brand Reviews...');
  const brandFiles = await glob('src/content/brands/*.md');
  brandFiles.forEach(file => {
    processFile(file, ASSIGNMENTS.brands);
  });

  // Process guides
  console.log('\n📚 Updating Guides...');
  const guideFiles = await glob('src/content/guides/*.md');
  guideFiles.forEach(file => {
    const slug = path.basename(file, '.md');
    const authorKey = ASSIGNMENTS.guides[slug] || 'kai'; // Default to Kai
    processFile(file, authorKey);
  });

  // Process blog posts
  console.log('\n📝 Updating Blog Posts...');
  const blogFiles = await glob('src/content/blog/*.md');
  blogFiles.forEach((file, index) => {
    const authorKey = ASSIGNMENTS.blog[index % ASSIGNMENTS.blog.length];
    processFile(file, authorKey);
  });

  console.log('\n✅ All files updated successfully!');
  console.log('\nAttribution Summary:');
  console.log(`  Layla Reyes: ${brandFiles.length} brand reviews + blog posts`);
  console.log(`  Henrik Johansson: Policy guides + blog posts`);
  console.log(`  Kai Nakano: Clinical guides + blog posts`);
  console.log(`  Dr. Amara Okonkwo: ALL content (medical review)`);
})();
