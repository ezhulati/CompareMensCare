/**
 * Normalizes pricing to 30-day cost for comparison
 */
export function normalizePriceTo30Days(price: number, days: number): number {
  return (price / days) * 30;
}

/**
 * Formats currency for display
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Generates slug from string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Truncates text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Gets category display name
 */
export function getCategoryName(slug: string): string {
  const categoryNames: Record<string, string> = {
    'sexual-health': 'Sexual Health',
    'hair-health': 'Hair Health',
    'testosterone': 'Testosterone & Hormone Therapy',
    'weight-loss': 'Weight Loss',
    'peptides': 'Peptide Therapy',
    'mental-health': 'Mental Health',
    'diagnostics': 'Diagnostics & Wellness',
    'sleep': 'Sleep & Insomnia',
    'herpes': 'Herpes Treatment',
  };
  return categoryNames[slug] || slug;
}

/**
 * Gets category icon name for Icon component
 */
export function getCategoryIcon(slug: string): string {
  const categoryIcons: Record<string, string> = {
    'sexual-health': 'sexual-health',
    'hair-health': 'hair-health',
    'testosterone': 'testosterone',
    'weight-loss': 'weight-loss',
    'peptides': 'peptides',
    'mental-health': 'mental-health',
    'diagnostics': 'diagnostics',
    'sleep': 'sleep',
    'herpes': 'herpes',
  };
  return categoryIcons[slug] || 'selection';
}

/**
 * Track affiliate click event
 */
export function trackAffiliateClick(brand: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      brand_name: brand,
      click_location: location,
    });
  }
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Type for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params: Record<string, string | number>
    ) => void;
  }
}
