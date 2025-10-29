/**
 * Priority Matcher - Calculates brand scores based on user priorities
 */

export type Priority =
  | 'affordability'
  | 'privacy'
  | 'speed'
  | 'selection'
  | 'transparency'
  | 'ease'
  | 'support'
  | 'insurance'
  | 'comprehensive';

export interface BrandPriorities {
  affordability?: number;
  privacy?: number;
  speed?: number;
  selection?: number;
  transparency?: number;
  ease?: number;
  support?: number;
  insurance?: number;
  comprehensive?: number;
}

export interface MatchScore {
  brandSlug: string;
  score: number;
  matchedPriorities: Priority[];
  topMatch: boolean;
}

/**
 * Calculate match score for a brand based on selected priorities
 * @param brandPriorities - Brand's priority scores (0-10)
 * @param selectedPriorities - User's selected priorities
 * @returns Match score (0-100)
 */
export function calculateMatchScore(
  brandPriorities: BrandPriorities,
  selectedPriorities: Priority[]
): number {
  if (!selectedPriorities.length) return 0;

  let totalScore = 0;
  let validPriorities = 0;

  selectedPriorities.forEach((priority) => {
    const brandScore = brandPriorities[priority];
    if (brandScore !== undefined) {
      totalScore += brandScore;
      validPriorities++;
    }
  });

  if (validPriorities === 0) return 0;

  // Normalize to 0-100 scale
  return Math.round((totalScore / validPriorities) * 10);
}

/**
 * Get top priorities that a brand excels at
 * @param brandPriorities - Brand's priority scores
 * @param threshold - Minimum score to consider (default 8)
 * @returns Array of priorities brand excels at
 */
export function getTopPriorities(
  brandPriorities: BrandPriorities,
  threshold: number = 8
): Priority[] {
  return (Object.entries(brandPriorities) as [Priority, number][])
    .filter(([_, score]) => score >= threshold)
    .sort(([_, a], [__, b]) => b - a)
    .map(([priority]) => priority);
}

/**
 * Rank brands by match score
 * @param brands - Array of brands with priority data
 * @param selectedPriorities - User's selected priorities
 * @returns Sorted array of match scores
 */
export function rankBrandsByMatch<T extends { slug: string; priorities?: BrandPriorities }>(
  brands: T[],
  selectedPriorities: Priority[]
): MatchScore[] {
  const scores = brands.map((brand) => {
    const priorities = brand.priorities || {};
    const score = calculateMatchScore(priorities, selectedPriorities);

    return {
      brandSlug: brand.slug,
      score,
      matchedPriorities: selectedPriorities.filter((p) => {
        const brandScore = priorities[p];
        return brandScore !== undefined && brandScore >= 7;
      }),
      topMatch: false,
    };
  });

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);

  // Mark top matches (within 5 points of the highest score)
  if (scores.length > 0) {
    const topScore = scores[0].score;
    scores.forEach((score) => {
      score.topMatch = score.score >= topScore - 5;
    });
  }

  return scores;
}

/**
 * Get priority label for display
 */
export function getPriorityLabel(priority: Priority): string {
  const labels: Record<Priority, string> = {
    affordability: 'Best Value',
    privacy: 'Maximum Privacy',
    speed: 'Fast Access',
    selection: 'Treatment Variety',
    transparency: 'Price Transparency',
    ease: 'Easy to Use',
    support: 'Great Support',
    insurance: 'Insurance Accepted',
    comprehensive: 'One-Stop Shop',
  };
  return labels[priority];
}

/**
 * Get priority icon for display
 */
export function getPriorityIcon(priority: Priority): string {
  const icons: Record<Priority, string> = {
    affordability: '💰',
    privacy: '🔒',
    speed: '⚡',
    selection: '🎯',
    transparency: '📊',
    ease: '✨',
    support: '💬',
    insurance: '🏥',
    comprehensive: '🏪',
  };
  return icons[priority];
}

/**
 * Store user priorities in session storage
 */
export function storeUserPriorities(priorities: Priority[]): void {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    sessionStorage.setItem('userPriorities', JSON.stringify(priorities));
  }
}

/**
 * Get stored user priorities from session storage
 */
export function getUserPriorities(): Priority[] {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    const stored = sessionStorage.getItem('userPriorities');
    if (stored) {
      try {
        return JSON.parse(stored) as Priority[];
      } catch {
        return [];
      }
    }
  }
  return [];
}

/**
 * Clear stored user priorities
 */
export function clearUserPriorities(): void {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    sessionStorage.removeItem('userPriorities');
  }
}
