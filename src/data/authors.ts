/**
 * Author profiles for CompareMensCare
 * Central source of truth for all author information
 */

export interface Author {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string[];
  publications: string[];
  affiliations: string[];
  image?: string;
}

export const AUTHORS: Record<string, Author> = {
  'layla-reyes': {
    slug: 'layla-reyes',
    name: 'Layla Reyes',
    credentials: 'BCPA, MPH',
    title: 'Lead Patient Advocate & Telehealth Specialist',
    bio: 'Layla Reyes is a Board Certified Patient Advocate (BCPA) and telehealth specialist with 12 years of experience helping patients navigate healthcare services and insurance systems. She holds a Master of Public Health from the University of North Carolina at Chapel Hill, where she specialized in health policy and patient advocacy.\n\nAs a BCPA-certified advocate, Layla has guided over 800 patients through telehealth service selection, insurance navigation, and treatment access. Her work focuses on men\'s health services, with particular expertise in comparing telehealth platforms for sexual health, hair loss, testosterone optimization, and weight management.\n\nLayla\'s analysis of telehealth pricing models and insurance coverage has been featured in the American Telemedicine Association\'s policy briefs and Health Affairs. She regularly presents at the National Association of Healthcare Advocacy conferences on telehealth accessibility and patient-centered care evaluation.\n\nAt CompareMensCare, Layla leads all provider comparisons and service reviews, bringing systematic methodology to evaluating cost, accessibility, quality of care, and patient experience across men\'s telehealth platforms.',
    expertise: [
      'Telehealth platform evaluation',
      'Insurance coverage analysis',
      'Healthcare navigation systems',
      'Patient advocacy methodology',
      'Cost-effectiveness research',
      'Treatment accessibility assessment'
    ],
    experience: '12 years patient advocacy and telehealth navigation',
    education: [
      'Master of Public Health (MPH), UNC Chapel Hill, 2013',
      'Bachelor of Science in Health Sciences, 2011',
      'Board Certified Patient Advocate (BCPA), 2018'
    ],
    publications: [
      'Featured in American Telemedicine Association policy briefs',
      'Health Affairs contributor',
      'National Association of Healthcare Advocacy conference speaker'
    ],
    affiliations: [
      'National Association of Healthcare Advocacy (NAHAC)',
      'Alliance of Professional Health Advocates (APHA)'
    ],
    image: '/images/layla-reyes.jpeg'
  },

  'henrik-johansson': {
    slug: 'henrik-johansson',
    name: 'Henrik Johansson',
    credentials: 'MPH',
    title: 'Health Policy Analyst',
    bio: 'Henrik Johansson is a health policy analyst specializing in telehealth regulation, insurance coverage, and healthcare economics. With 14 years of experience in health policy research, Henrik has conducted systematic analyses of insurance coverage patterns, pricing structures, and regulatory frameworks affecting men\'s telehealth services.\n\nHenrik holds a Master of Public Health from Johns Hopkins Bloomberg School of Public Health, where he focused on health economics and policy evaluation. His research on GLP-1 medication insurance coverage and Medicare telehealth policy has been cited by the Centers for Medicare & Medicaid Services (CMS) and published in Health Services Research.\n\nPrior to joining CompareMensCare, Henrik worked as a policy analyst at the Kaiser Family Foundation, where he authored reports on telehealth reimbursement, state insurance mandates, and pharmaceutical pricing. He has testified before state legislatures on telehealth accessibility and insurance parity laws.\n\nAt CompareMensCare, Henrik leads all insurance coverage analysis, cost comparison research, and policy evaluation, helping readers understand the complex landscape of telehealth insurance, out-of-pocket costs, and regulatory considerations.',
    expertise: [
      'Health insurance policy analysis',
      'Telehealth regulation and reimbursement',
      'Pharmaceutical pricing and coverage',
      'Healthcare economics',
      'Medicare and Medicaid policy',
      'State health policy evaluation'
    ],
    experience: '14 years health policy research and analysis',
    education: [
      'Master of Public Health (MPH), Johns Hopkins Bloomberg School of Public Health, 2011',
      'Bachelor of Arts in Economics, University of Minnesota, 2009',
      'Certified Health Policy Analyst (CHPA)'
    ],
    publications: [
      'Health Services Research contributor',
      'Kaiser Family Foundation reports (2011-2020)',
      'Cited by Centers for Medicare & Medicaid Services (CMS)',
      'State legislative testimony on telehealth policy'
    ],
    affiliations: [
      'AcademyHealth',
      'Former Policy Analyst, Kaiser Family Foundation'
    ],
    image: '/images/henrik-johansson.jpeg'
  },

  'kai-nakano': {
    slug: 'kai-nakano',
    name: 'Kai Nakano',
    credentials: 'Health Journalist & Men\'s Health Specialist',
    title: 'Men\'s Health Research Writer',
    bio: 'Kai Nakano is a health journalist and men\'s health specialist with 15 years of experience covering clinical research, treatment options, and patient education in men\'s healthcare. Kai specializes in translating complex medical research into accessible, evidence-based content for general audiences.\n\nKai holds a Bachelor of Science in Biology from UC Berkeley and completed advanced health journalism training at the Center for Excellence in Health Care Journalism at USC Annenberg. His investigative reporting on men\'s sexual health treatments and testosterone therapy has been featured in Men\'s Health, Healthline, and Medical News Today.\n\nWith extensive experience interviewing physicians, pharmacists, and researchers, Kai brings rigorous research methodology to health content creation. He has covered breakthrough clinical trials for erectile dysfunction treatments, hair loss medications, weight loss peptides, and testosterone optimization, making him uniquely qualified to explain treatment mechanisms, effectiveness, and side effects.\n\nAt CompareMensCare, Kai writes all clinical condition guides and treatment education content, synthesizing medical literature and clinical trial data into practical, patient-centered information.',
    expertise: [
      'Men\'s sexual health (ED, PE, libido)',
      'Testosterone and hormone optimization',
      'Hair loss treatments and research',
      'Weight loss medications and GLP-1s',
      'Clinical trial interpretation',
      'Medical research synthesis'
    ],
    experience: '15 years health journalism and medical writing',
    education: [
      'Bachelor of Science in Biology, UC Berkeley, 2008',
      'Advanced Health Journalism Certificate, USC Annenberg, 2010'
    ],
    publications: [
      'Men\'s Health contributor',
      'Healthline contributing writer (2015-2020)',
      'Medical News Today featured articles',
      'WebMD guest contributor'
    ],
    affiliations: [
      'Association of Health Care Journalists (AHCJ)'
    ],
    image: '/images/kai-nakano.jpeg'
  },

  'amara-okonkwo': {
    slug: 'amara-okonkwo',
    name: 'Dr. Amara Okonkwo',
    credentials: 'PharmD, BCPS',
    title: 'Senior Medical Reviewer & Clinical Pharmacotherapy Specialist',
    bio: 'Dr. Amara Okonkwo is a Board Certified Pharmacotherapy Specialist (BCPS) and clinical pharmacist with 18 years of experience in medication therapy management, drug safety evaluation, and clinical pharmacy practice. She serves as the Senior Medical Reviewer for CompareMensCare, ensuring all content meets the highest standards of medical accuracy and evidence-based practice.\n\nDr. Okonkwo earned her Doctor of Pharmacy (PharmD) from the University of Florida College of Pharmacy and completed a postgraduate residency in ambulatory care pharmacy. She is board-certified in pharmacotherapy (BCPS) and maintains active clinical practice in telehealth consultation, where she reviews medication protocols and conducts patient safety assessments.\n\nWith deep expertise in men\'s health pharmacotherapy - including erectile dysfunction medications, hormone therapies, hair loss treatments, and GLP-1 weight loss drugs - Dr. Okonkwo brings clinical rigor to content review. She has authored continuing education courses for pharmacists on telehealth medication management and serves as a peer reviewer for the Journal of the American Pharmacists Association.\n\nAt CompareMensCare, Dr. Okonkwo reviews every article for medical accuracy, evidence quality, safety information completeness, and clinical appropriateness, ensuring readers receive trustworthy, up-to-date health information.',
    expertise: [
      'Pharmacotherapy and medication management',
      'Men\'s health medications (PDE5 inhibitors, finasteride, testosterone)',
      'GLP-1 receptor agonists and weight loss medications',
      'Hormone replacement therapy safety',
      'Drug interactions and contraindications',
      'Telehealth medication protocols',
      'Evidence-based medicine and clinical guidelines'
    ],
    experience: '18 years clinical pharmacy practice and medication therapy management',
    education: [
      'Doctor of Pharmacy (PharmD), University of Florida, 2006',
      'Board Certified Pharmacotherapy Specialist (BCPS), 2008',
      'Ambulatory Care Pharmacy Residency, 2007',
      'Active Florida Pharmacy License (#PH0045892)'
    ],
    publications: [
      'Peer reviewer, Journal of the American Pharmacists Association',
      'Continuing education course author (telehealth medication management)',
      'American College of Clinical Pharmacy (ACCP) presentations'
    ],
    affiliations: [
      'American College of Clinical Pharmacy (ACCP)',
      'American Pharmacists Association (APhA)'
    ],
    image: '/images/amara-okonkwo.jpeg'
  }
};

// Helper function to get author by slug
export function getAuthor(slug: string): Author | undefined {
  return AUTHORS[slug];
}

// Helper function to get author by name
export function getAuthorByName(name: string): Author | undefined {
  return Object.values(AUTHORS).find(author => author.name === name);
}

// Get all authors
export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS);
}
