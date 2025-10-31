/**
 * Centralized affiliate URL mappings
 *
 * In production, these should be moved to environment variables for:
 * - Security (keeping affiliate IDs private)
 * - Easy updates without code deployment
 * - A/B testing different affiliate links
 *
 * Usage: AFFILIATE_URL_HIMS=https://forhims.com/ref/your-id
 */

export const affiliateUrls: Record<string, string> = {
  // Sexual Health & Comprehensive
  'hims': import.meta.env.PUBLIC_HIMS_AFFILIATE_URL || 'https://www.forhims.com/',
  'ro': import.meta.env.PUBLIC_RO_AFFILIATE_URL || 'https://ro.co/',
  'bluechew': import.meta.env.PUBLIC_BLUECHEW_AFFILIATE_URL || 'https://www.bluechew.com/',
  'manual': import.meta.env.PUBLIC_MANUAL_AFFILIATE_URL || 'https://www.manual.co/',
  'numan': import.meta.env.PUBLIC_NUMAN_AFFILIATE_URL || 'https://www.numan.com/',
  'keeps': import.meta.env.PUBLIC_KEEPS_AFFILIATE_URL || 'https://www.keeps.com/',

  // Testosterone
  'hone-health': import.meta.env.PUBLIC_HONE_HEALTH_AFFILIATE_URL || 'https://www.honehealth.com/',
  'vault-health': import.meta.env.PUBLIC_VAULT_HEALTH_AFFILIATE_URL || 'https://www.vaulthealth.com/',

  // Mental Health
  'healthymale': import.meta.env.PUBLIC_HEALTHYMALE_AFFILIATE_URL || 'https://www.healthymale.com.au/',
  'betterhelp': import.meta.env.PUBLIC_BETTERHELP_AFFILIATE_URL || 'https://www.betterhelp.com/',
  'talkspace': import.meta.env.PUBLIC_TALKSPACE_AFFILIATE_URL || 'https://www.talkspace.com/',

  // Diagnostics
  'letsgetchecked': import.meta.env.PUBLIC_LETSGETCHECKED_AFFILIATE_URL || 'https://www.letsgetchecked.com/',

  // Add more brands as needed
};

/**
 * Get affiliate URL for a brand
 * Returns the brand's homepage if no affiliate link is configured
 */
export function getAffiliateUrl(brandSlug: string): string {
  const url = affiliateUrls[brandSlug.toLowerCase()];

  if (!url) {
    console.warn(`No affiliate URL configured for brand: ${brandSlug}`);
    return '/'; // Fallback to homepage
  }

  return url;
}

/**
 * Check if affiliate URL is configured for a brand
 */
export function hasAffiliateUrl(brandSlug: string): boolean {
  return Boolean(affiliateUrls[brandSlug.toLowerCase()]);
}
