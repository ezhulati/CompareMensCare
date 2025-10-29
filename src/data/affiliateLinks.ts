export const affiliateLinks: Record<string, string> = {
  hims: process.env.PUBLIC_HIMS_AFFILIATE_URL || 'https://www.hims.com/',
  ro: process.env.PUBLIC_RO_AFFILIATE_URL || 'https://ro.co/',
  bluechew: process.env.PUBLIC_BLUECHEW_AFFILIATE_URL || 'https://bluechew.com/',
  keeps: process.env.PUBLIC_KEEPS_AFFILIATE_URL || 'https://www.keeps.com/',
  manual: process.env.PUBLIC_MANUAL_AFFILIATE_URL || 'https://www.manual.co/',
  numan: process.env.PUBLIC_NUMAN_AFFILIATE_URL || 'https://www.numan.com/',
  'hone-health': process.env.PUBLIC_HONE_HEALTH_AFFILIATE_URL || 'https://honehealth.com/',
  'vault-health': process.env.PUBLIC_VAULT_HEALTH_AFFILIATE_URL || 'https://www.vaulthealth.com/',
  healthymale: process.env.PUBLIC_HEALTHYMALE_AFFILIATE_URL || 'https://www.healthymale.com/',
  betterhelp: process.env.PUBLIC_BETTERHELP_AFFILIATE_URL || 'https://www.betterhelp.com/',
  talkspace: process.env.PUBLIC_TALKSPACE_AFFILIATE_URL || 'https://www.talkspace.com/',
  letsgetchecked: process.env.PUBLIC_LETSGETCHECKED_AFFILIATE_URL || 'https://www.letsgetchecked.com/',
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
};
