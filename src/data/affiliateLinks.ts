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
