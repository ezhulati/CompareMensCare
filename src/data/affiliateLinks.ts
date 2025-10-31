export const affiliateLinks: Record<string, string> = {
  hims: import.meta.env.PUBLIC_HIMS_AFFILIATE_URL || 'https://www.forhims.com/',
  ro: import.meta.env.PUBLIC_RO_AFFILIATE_URL || 'https://ro.co/',
  bluechew: import.meta.env.PUBLIC_BLUECHEW_AFFILIATE_URL || 'https://www.bluechew.com/',
  keeps: import.meta.env.PUBLIC_KEEPS_AFFILIATE_URL || 'https://www.keeps.com/',
  manual: import.meta.env.PUBLIC_MANUAL_AFFILIATE_URL || 'https://www.manual.co/',
  numan: import.meta.env.PUBLIC_NUMAN_AFFILIATE_URL || 'https://www.numan.com/',
  'hone-health': import.meta.env.PUBLIC_HONE_HEALTH_AFFILIATE_URL || 'https://www.honehealth.com/',
  'vault-health': import.meta.env.PUBLIC_VAULT_HEALTH_AFFILIATE_URL || 'https://www.vaulthealth.com/',
  healthymale: import.meta.env.PUBLIC_HEALTHYMALE_AFFILIATE_URL || 'https://www.healthymale.com.au/',
  betterhelp: import.meta.env.PUBLIC_BETTERHELP_AFFILIATE_URL || 'https://www.betterhelp.com/',
  talkspace: import.meta.env.PUBLIC_TALKSPACE_AFFILIATE_URL || 'https://www.talkspace.com/',
  letsgetchecked: import.meta.env.PUBLIC_LETSGETCHECKED_AFFILIATE_URL || 'https://www.letsgetchecked.com/',
  // Phase 1 additions - Mental Health
  cerebral: import.meta.env.PUBLIC_CEREBRAL_AFFILIATE_URL || 'https://cerebral.com/',
  amwell: import.meta.env.PUBLIC_AMWELL_AFFILIATE_URL || 'https://amwell.com/',
  teladoc: import.meta.env.PUBLIC_TELADOC_AFFILIATE_URL || 'https://www.teladoc.com/',
  // Phase 1 additions - Diagnostics
  everlywell: import.meta.env.PUBLIC_EVERLYWELL_AFFILIATE_URL || 'https://www.everlywell.com/',
  imaware: import.meta.env.PUBLIC_IMAWARE_AFFILIATE_URL || 'https://www.imaware.health/',
  // Phase 1 additions - Weight Loss
  henry_meds: import.meta.env.PUBLIC_HENRY_MEDS_AFFILIATE_URL || 'https://henrymeds.com/',
  lifemd: import.meta.env.PUBLIC_LIFEMD_AFFILIATE_URL || 'https://lifemd.com/',
  // Peptides category
  telewellnessmd: import.meta.env.PUBLIC_TELEWELLNESSMD_AFFILIATE_URL || 'https://info.telewellnessmd.com/',
  'integrative-peptides': import.meta.env.PUBLIC_INTEGRATIVE_PEPTIDES_AFFILIATE_URL || 'https://integrativepeptides.com/',
  'ascension-peptides': import.meta.env.PUBLIC_ASCENSION_PEPTIDES_AFFILIATE_URL || 'https://ascensionpeptides.com/',
  'pure-life-peptides': import.meta.env.PUBLIC_PURE_LIFE_PEPTIDES_AFFILIATE_URL || 'https://purelifepeptides.com/',
  'particle-peptides': import.meta.env.PUBLIC_PARTICLE_PEPTIDES_AFFILIATE_URL || 'https://particlepeptides.com/',
  'limitless-life-nootropics': import.meta.env.PUBLIC_LIMITLESS_LIFE_NOOTROPICS_AFFILIATE_URL || 'https://limitlesslifenootropics.com/',
  'body-balance-medical': import.meta.env.PUBLIC_BODY_BALANCE_MEDICAL_AFFILIATE_URL || 'https://bodybalancemedical.com/',
  'peptide-university': import.meta.env.PUBLIC_PEPTIDE_UNIVERSITY_AFFILIATE_URL || 'https://mypeptideuniversity.com/',
};

export const affiliateInfo = {
  hims: {
    name: 'Hims',
    cookieDays: 30,
    commission: 'Per sale',
  },
  ro: {
    name: 'Ro',
    cookieDays: 30,
    commission: 'Per sale',
  },
  bluechew: {
    name: 'BlueChew',
    cookieDays: 30,
    commission: 'Per sale',
  },
  keeps: {
    name: 'Keeps',
    cookieDays: 30,
    commission: 'Per sale',
  },
  manual: {
    name: 'Manual',
    cookieDays: 30,
    commission: 'Per sale',
  },
  numan: {
    name: 'Numan',
    cookieDays: 30,
    commission: 'Per sale',
  },
  'hone-health': {
    name: 'Hone Health',
    cookieDays: 30,
    commission: 'Per sale',
  },
  'vault-health': {
    name: 'Vault Health',
    cookieDays: 30,
    commission: 'Per sale ($28)',
  },
  healthymale: {
    name: 'HealthyMale',
    cookieDays: 30,
    commission: 'Per sale',
  },
  betterhelp: {
    name: 'BetterHelp',
    cookieDays: 30,
    commission: 'Per referral ($100)',
  },
  talkspace: {
    name: 'Talkspace',
    cookieDays: 30,
    commission: 'Per referral ($50-$100)',
  },
  letsgetchecked: {
    name: 'LetsGetChecked',
    cookieDays: 28,
    commission: 'Per sale',
  },
  // Phase 1 additions - Mental Health
  cerebral: {
    name: 'Cerebral',
    cookieDays: 30,
    commission: 'Per referral',
  },
  amwell: {
    name: 'Amwell',
    cookieDays: 30,
    commission: 'Per referral',
  },
  teladoc: {
    name: 'Teladoc Health',
    cookieDays: 30,
    commission: 'Per referral',
  },
  // Phase 1 additions - Diagnostics
  everlywell: {
    name: 'Everlywell',
    cookieDays: 45,
    commission: '12% for new customers, 6% for returning',
  },
  imaware: {
    name: 'imaware',
    cookieDays: 30,
    commission: 'Per sale',
  },
  // Phase 1 additions - Weight Loss
  henry_meds: {
    name: 'Henry Meds',
    cookieDays: 30,
    commission: '$25 per subscription',
  },
  lifemd: {
    name: 'LifeMD',
    cookieDays: 30,
    commission: '$115 CPA',
  },
  // Peptides category
  telewellnessmd: {
    name: 'TeleWellnessMD',
    cookieDays: 30,
    commission: '10% of gross sales per referred patient',
  },
  'integrative-peptides': {
    name: 'Integrative Peptides',
    cookieDays: 30,
    commission: '10-15% per sale',
  },
  'ascension-peptides': {
    name: 'Ascension Peptides',
    cookieDays: 30,
    commission: '20% first purchase, 10% lifetime',
  },
  'pure-life-peptides': {
    name: 'Pure Life Peptides',
    cookieDays: 30,
    commission: 'Up to 25%',
  },
  'particle-peptides': {
    name: 'Particle Peptides',
    cookieDays: 30,
    commission: '10% (pays in EUR)',
  },
  'limitless-life-nootropics': {
    name: 'Limitless Life Nootropics',
    cookieDays: 30,
    commission: '15% (12% on VIP peptides)',
  },
  'body-balance-medical': {
    name: 'Body Balance Medical',
    cookieDays: 30,
    commission: '$100 per referral or 10% sales',
  },
  'peptide-university': {
    name: 'Peptide University',
    cookieDays: 30,
    commission: '15-25% on courses',
  },
};
