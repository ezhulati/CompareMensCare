/**
 * Maps guided matcher persona answers to priority weights for scoring algorithm
 * Used to calculate alternative brand matches based on user preferences
 */

export interface PriorityWeights {
  affordability: number;
  privacy: number;
  speed: number;
  selection: number;
  transparency: number;
  ease: number;
  support: number;
  insurance: number;
  comprehensive: number;
}

/**
 * Sexual Health priority mappings
 */
export const sexualHealthPriorities: Record<string, PriorityWeights> = {
  // First-timer priorities
  'privacy-discretion': {
    affordability: 0.3,
    privacy: 1.0,
    speed: 0.5,
    selection: 0.2,
    transparency: 0.4,
    ease: 0.7,
    support: 0.4,
    insurance: 0.1,
    comprehensive: 0.3,
  },
  'medical-credibility': {
    affordability: 0.4,
    privacy: 0.6,
    speed: 0.5,
    selection: 0.8,
    transparency: 1.0,
    ease: 0.6,
    support: 0.9,
    insurance: 0.3,
    comprehensive: 1.0,
  },
  'lowest-cost': {
    affordability: 1.0,
    privacy: 0.4,
    speed: 0.3,
    selection: 0.2,
    transparency: 0.7,
    ease: 0.6,
    support: 0.2,
    insurance: 0.5,
    comprehensive: 0.2,
  },
  'easy-process': {
    affordability: 0.5,
    privacy: 0.6,
    speed: 0.9,
    selection: 0.4,
    transparency: 0.7,
    ease: 1.0,
    support: 0.7,
    insurance: 0.2,
    comprehensive: 0.6,
  },

  // Switching priorities
  'too-expensive': {
    affordability: 1.0,
    privacy: 0.3,
    speed: 0.4,
    selection: 0.5,
    transparency: 0.9,
    ease: 0.5,
    support: 0.3,
    insurance: 0.7,
    comprehensive: 0.4,
  },
  'limited-options': {
    affordability: 0.5,
    privacy: 0.4,
    speed: 0.5,
    selection: 1.0,
    transparency: 0.7,
    ease: 0.6,
    support: 0.7,
    insurance: 0.3,
    comprehensive: 1.0,
  },
  'poor-support': {
    affordability: 0.4,
    privacy: 0.5,
    speed: 0.7,
    selection: 0.6,
    transparency: 0.8,
    ease: 0.7,
    support: 1.0,
    insurance: 0.3,
    comprehensive: 0.8,
  },
  'delivery-issues': {
    affordability: 0.6,
    privacy: 0.8,
    speed: 1.0,
    selection: 0.5,
    transparency: 0.7,
    ease: 0.9,
    support: 0.7,
    insurance: 0.2,
    comprehensive: 0.6,
  },

  // Value seeker priorities
  'occasionally': {
    affordability: 1.0,
    privacy: 0.7,
    speed: 0.5,
    selection: 0.3,
    transparency: 0.9,
    ease: 0.8,
    support: 0.4,
    insurance: 0.4,
    comprehensive: 0.3,
  },
  'regularly': {
    affordability: 0.9,
    privacy: 0.6,
    speed: 0.6,
    selection: 0.7,
    transparency: 0.8,
    ease: 0.7,
    support: 0.6,
    insurance: 0.5,
    comprehensive: 0.7,
  },
  'try-different': {
    affordability: 0.7,
    privacy: 0.5,
    speed: 0.6,
    selection: 1.0,
    transparency: 0.7,
    ease: 0.7,
    support: 0.6,
    insurance: 0.3,
    comprehensive: 0.9,
  },
};

/**
 * Hair Health priority mappings
 */
export const hairHealthPriorities: Record<string, PriorityWeights> = {
  // Early stage - prevention
  'prevention': {
    affordability: 0.7,
    privacy: 0.6,
    speed: 0.5,
    selection: 0.6,
    transparency: 0.8,
    ease: 0.9,
    support: 0.7,
    insurance: 0.4,
    comprehensive: 0.5,
  },
  // Early stage - regrowth
  'regrowth': {
    affordability: 0.6,
    privacy: 0.5,
    speed: 0.6,
    selection: 0.9,
    transparency: 0.7,
    ease: 0.7,
    support: 0.8,
    insurance: 0.3,
    comprehensive: 0.9,
  },
  // Moderate - affordability
  'affordable': {
    affordability: 1.0,
    privacy: 0.5,
    speed: 0.5,
    selection: 0.5,
    transparency: 0.9,
    ease: 0.7,
    support: 0.5,
    insurance: 0.6,
    comprehensive: 0.4,
  },
  // Moderate - medical guidance
  'medical-guidance': {
    affordability: 0.6,
    privacy: 0.6,
    speed: 0.6,
    selection: 0.8,
    transparency: 0.9,
    ease: 0.7,
    support: 1.0,
    insurance: 0.5,
    comprehensive: 1.0,
  },
  // Advanced - aggressive
  'aggressive': {
    affordability: 0.5,
    privacy: 0.5,
    speed: 0.7,
    selection: 1.0,
    transparency: 0.8,
    ease: 0.6,
    support: 0.9,
    insurance: 0.4,
    comprehensive: 1.0,
  },
  // Advanced - realistic
  'realistic': {
    affordability: 0.8,
    privacy: 0.6,
    speed: 0.5,
    selection: 0.6,
    transparency: 1.0,
    ease: 0.7,
    support: 1.0,
    insurance: 0.5,
    comprehensive: 0.7,
  },
};

/**
 * Testosterone priority mappings
 */
export const testosteronePriorities: Record<string, PriorityWeights> = {
  // New to TRT
  'comprehensive-testing': {
    affordability: 0.5,
    privacy: 0.7,
    speed: 0.5,
    selection: 0.7,
    transparency: 1.0,
    ease: 0.6,
    support: 1.0,
    insurance: 0.5,
    comprehensive: 1.0,
  },
  'affordable-trt': {
    affordability: 1.0,
    privacy: 0.6,
    speed: 0.6,
    selection: 0.5,
    transparency: 0.8,
    ease: 0.7,
    support: 0.6,
    insurance: 0.7,
    comprehensive: 0.6,
  },
  'medical-oversight': {
    affordability: 0.6,
    privacy: 0.7,
    speed: 0.5,
    selection: 0.7,
    transparency: 1.0,
    ease: 0.6,
    support: 1.0,
    insurance: 0.5,
    comprehensive: 1.0,
  },
  'easy-trt': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.9,
    selection: 0.6,
    transparency: 0.7,
    ease: 1.0,
    support: 0.7,
    insurance: 0.4,
    comprehensive: 0.7,
  },

  // Switching providers
  'cost-concerns': {
    affordability: 1.0,
    privacy: 0.5,
    speed: 0.5,
    selection: 0.5,
    transparency: 0.8,
    ease: 0.6,
    support: 0.5,
    insurance: 0.8,
    comprehensive: 0.5,
  },
  'better-testing': {
    affordability: 0.6,
    privacy: 0.7,
    speed: 0.6,
    selection: 0.7,
    transparency: 1.0,
    ease: 0.6,
    support: 0.9,
    insurance: 0.5,
    comprehensive: 1.0,
  },
  'more-support': {
    affordability: 0.6,
    privacy: 0.7,
    speed: 0.7,
    selection: 0.7,
    transparency: 0.9,
    ease: 0.7,
    support: 1.0,
    insurance: 0.5,
    comprehensive: 0.9,
  },
  'convenience': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.9,
    selection: 0.6,
    transparency: 0.7,
    ease: 1.0,
    support: 0.7,
    insurance: 0.4,
    comprehensive: 0.7,
  },

  // Optimizing
  'lower-cost': {
    affordability: 1.0,
    privacy: 0.5,
    speed: 0.6,
    selection: 0.5,
    transparency: 0.8,
    ease: 0.7,
    support: 0.5,
    insurance: 0.8,
    comprehensive: 0.5,
  },
  'detailed-labs': {
    affordability: 0.6,
    privacy: 0.7,
    speed: 0.6,
    selection: 0.7,
    transparency: 1.0,
    ease: 0.6,
    support: 0.9,
    insurance: 0.5,
    comprehensive: 1.0,
  },
  'better-convenience': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.9,
    selection: 0.6,
    transparency: 0.7,
    ease: 1.0,
    support: 0.7,
    insurance: 0.4,
    comprehensive: 0.7,
  },
};

/**
 * Weight Loss priority mappings
 */
export const weightLossPriorities: Record<string, PriorityWeights> = {
  // Modest loss
  'medication-only': {
    affordability: 0.8,
    privacy: 0.7,
    speed: 0.8,
    selection: 0.5,
    transparency: 0.8,
    ease: 0.9,
    support: 0.5,
    insurance: 0.6,
    comprehensive: 0.4,
  },
  'holistic': {
    affordability: 0.7,
    privacy: 0.6,
    speed: 0.6,
    selection: 0.8,
    transparency: 0.8,
    ease: 0.7,
    support: 0.9,
    insurance: 0.5,
    comprehensive: 1.0,
  },

  // Significant loss
  'affordable-weight': {
    affordability: 1.0,
    privacy: 0.6,
    speed: 0.7,
    selection: 0.6,
    transparency: 0.9,
    ease: 0.8,
    support: 0.6,
    insurance: 0.7,
    comprehensive: 0.6,
  },
  'supervised': {
    affordability: 0.6,
    privacy: 0.7,
    speed: 0.7,
    selection: 0.8,
    transparency: 0.9,
    ease: 0.7,
    support: 1.0,
    insurance: 0.6,
    comprehensive: 1.0,
  },

  // Major loss
  'comprehensive-care': {
    affordability: 0.6,
    privacy: 0.7,
    speed: 0.7,
    selection: 1.0,
    transparency: 0.9,
    ease: 0.7,
    support: 1.0,
    insurance: 0.6,
    comprehensive: 1.0,
  },
  'flexibility': {
    affordability: 0.7,
    privacy: 0.7,
    speed: 0.8,
    selection: 1.0,
    transparency: 0.8,
    ease: 0.9,
    support: 0.8,
    insurance: 0.5,
    comprehensive: 0.9,
  },
};

/**
 * Mental Health priority mappings
 */
export const mentalHealthPriorities: Record<string, PriorityWeights> = {
  // Talk therapy
  'broad-network': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.8,
    selection: 1.0,
    transparency: 0.7,
    ease: 0.9,
    support: 0.8,
    insurance: 0.6,
    comprehensive: 0.7,
  },
  'specialized-matching': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.6,
    selection: 0.9,
    transparency: 0.8,
    ease: 0.8,
    support: 1.0,
    insurance: 0.6,
    comprehensive: 0.9,
  },

  // Medication
  'fast-access': {
    affordability: 0.7,
    privacy: 0.7,
    speed: 1.0,
    selection: 0.6,
    transparency: 0.7,
    ease: 0.9,
    support: 0.7,
    insurance: 0.5,
    comprehensive: 0.6,
  },
  'ongoing-relationship': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.6,
    selection: 0.7,
    transparency: 0.8,
    ease: 0.8,
    support: 1.0,
    insurance: 0.6,
    comprehensive: 0.9,
  },

  // Both
  'integrated': {
    affordability: 0.7,
    privacy: 0.8,
    speed: 0.7,
    selection: 0.8,
    transparency: 0.8,
    ease: 0.8,
    support: 0.9,
    insurance: 0.6,
    comprehensive: 1.0,
  },
  'flexible': {
    affordability: 0.8,
    privacy: 0.8,
    speed: 0.8,
    selection: 0.9,
    transparency: 0.7,
    ease: 0.9,
    support: 0.8,
    insurance: 0.6,
    comprehensive: 0.8,
  },
};

/**
 * Diagnostics priority mappings
 */
export const diagnosticsPriorities: Record<string, PriorityWeights> = {
  'fast-results': {
    affordability: 0.7,
    privacy: 0.9,
    speed: 1.0,
    selection: 0.6,
    transparency: 0.7,
    ease: 0.9,
    support: 0.6,
    insurance: 0.5,
    comprehensive: 0.5,
  },
  'detailed-analysis': {
    affordability: 0.6,
    privacy: 0.8,
    speed: 0.6,
    selection: 0.7,
    transparency: 1.0,
    ease: 0.7,
    support: 0.9,
    insurance: 0.5,
    comprehensive: 0.9,
  },
  'consultation': {
    affordability: 0.6,
    privacy: 0.8,
    speed: 0.7,
    selection: 0.7,
    transparency: 0.9,
    ease: 0.8,
    support: 1.0,
    insurance: 0.5,
    comprehensive: 0.9,
  },
  'affordable-test': {
    affordability: 1.0,
    privacy: 0.8,
    speed: 0.7,
    selection: 0.5,
    transparency: 0.8,
    ease: 0.9,
    support: 0.6,
    insurance: 0.7,
    comprehensive: 0.5,
  },
};

/**
 * Get priority weights for a given category and user choice
 */
export function getPriorityWeights(
  category: string,
  choice: string
): PriorityWeights | null {
  const mappings: Record<string, Record<string, PriorityWeights>> = {
    'sexual-health': sexualHealthPriorities,
    'hair-health': hairHealthPriorities,
    testosterone: testosteronePriorities,
    'weight-loss': weightLossPriorities,
    'mental-health': mentalHealthPriorities,
    diagnostics: diagnosticsPriorities,
  };

  return mappings[category]?.[choice] || null;
}
