/**
 * Category Matcher Configuration
 * Defines subcategories and priorities for embedded guide matchers
 */

export interface SubcategoryOption {
  id: string;
  label: string;
  description?: string;
}

export interface PriorityOption {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface CategoryMatcherConfig {
  subcategories: SubcategoryOption[];
  priorities: PriorityOption[];
}

export const categoryMatcherConfig: Record<string, CategoryMatcherConfig> = {
  'sexual-health': {
    subcategories: [
      {
        id: 'ed-treatment',
        label: 'ED Treatment',
        description: 'Erectile dysfunction medications and treatment'
      },
      {
        id: 'pe-treatment',
        label: 'Premature Ejaculation',
        description: 'Delay treatments and medications'
      },
      {
        id: 'general',
        label: 'General Sexual Health',
        description: 'Comprehensive sexual wellness'
      }
    ],
    priorities: [
      {
        id: 'privacy',
        label: 'Maximum Privacy',
        icon: '🔒',
        description: 'Discreet packaging, confidential consultations'
      },
      {
        id: 'affordability',
        label: 'Lowest Cost',
        icon: '💰',
        description: 'Most affordable pricing and options'
      },
      {
        id: 'selection',
        label: 'Most Treatment Options',
        icon: '📋',
        description: 'Widest range of medications and dosages'
      },
      {
        id: 'ease',
        label: 'Easiest Process',
        icon: '⚡',
        description: 'Quickest, simplest getting started'
      }
    ]
  },

  'hair-health': {
    subcategories: [
      {
        id: 'male-pattern-baldness',
        label: 'Male Pattern Baldness',
        description: 'Finasteride, minoxidil for hereditary hair loss'
      },
      {
        id: 'hair-growth',
        label: 'Hair Growth & Regrowth',
        description: 'Treatments to stimulate new hair growth'
      },
      {
        id: 'prevention',
        label: 'Hair Loss Prevention',
        description: 'Early intervention and prevention'
      }
    ],
    priorities: [
      {
        id: 'selection',
        label: 'Prevention Focus',
        icon: '🛡️',
        description: 'Best for stopping further hair loss'
      },
      {
        id: 'comprehensive',
        label: 'Regrowth Results',
        icon: '📈',
        description: 'Proven track record for growing hair back'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Most cost-effective long-term treatment'
      },
      {
        id: 'support',
        label: 'Medical Guidance',
        icon: '👨‍⚕️',
        description: 'Strong physician support and monitoring'
      }
    ]
  },

  'testosterone': {
    subcategories: [
      {
        id: 'trt',
        label: 'Testosterone Replacement',
        description: 'TRT for clinically low testosterone'
      },
      {
        id: 'testing',
        label: 'Testing Only',
        description: 'Get testosterone levels tested first'
      },
      {
        id: 'optimization',
        label: 'Testosterone Optimization',
        description: 'Optimize T levels + overall health'
      }
    ],
    priorities: [
      {
        id: 'comprehensive',
        label: 'Comprehensive Testing',
        icon: '🔬',
        description: 'Thorough lab work and health screening'
      },
      {
        id: 'affordability',
        label: 'Affordable TRT',
        icon: '💰',
        description: 'Budget-friendly testosterone therapy'
      },
      {
        id: 'support',
        label: 'Medical Oversight',
        icon: '👨‍⚕️',
        description: 'Close physician monitoring and support'
      },
      {
        id: 'ease',
        label: 'Convenience',
        icon: '⚡',
        description: 'Easy at-home administration and delivery'
      }
    ]
  },

  'weight-loss': {
    subcategories: [
      {
        id: 'glp1',
        label: 'GLP-1 Medications',
        description: 'Semaglutide, tirzepatide for weight loss'
      },
      {
        id: 'comprehensive',
        label: 'Comprehensive Program',
        description: 'Medication + coaching + diet support'
      },
      {
        id: 'medical-supervised',
        label: 'Medically Supervised',
        description: 'Physician-led weight loss program'
      }
    ],
    priorities: [
      {
        id: 'comprehensive',
        label: 'Medication Access',
        icon: '💊',
        description: 'Easiest access to GLP-1 medications'
      },
      {
        id: 'support',
        label: 'Medical Supervision',
        icon: '👨‍⚕️',
        description: 'Close medical monitoring and support'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Most cost-effective weight loss options'
      },
      {
        id: 'comprehensive',
        label: 'Holistic Support',
        icon: '🌟',
        description: 'Coaching, nutrition, lifestyle support'
      }
    ]
  },

  'mental-health': {
    subcategories: [
      {
        id: 'therapy',
        label: 'Therapy Only',
        description: 'Talk therapy with licensed therapist'
      },
      {
        id: 'medication',
        label: 'Medication Management',
        description: 'Psychiatric medication prescribing'
      },
      {
        id: 'both',
        label: 'Therapy + Medication',
        description: 'Combined therapy and medication'
      }
    ],
    priorities: [
      {
        id: 'support',
        label: 'Therapist Quality',
        icon: '👨‍⚕️',
        description: 'Highest-rated, experienced therapists'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Most affordable mental health care'
      },
      {
        id: 'ease',
        label: 'Easy Scheduling',
        icon: '⚡',
        description: 'Quick matching and flexible scheduling'
      },
      {
        id: 'insurance',
        label: 'Insurance Accepted',
        icon: '💳',
        description: 'Accepts insurance for lower costs'
      }
    ]
  },

  'diagnostics': {
    subcategories: [
      {
        id: 'hormone-testing',
        label: 'Hormone Testing',
        description: 'Testosterone, thyroid, hormone panels'
      },
      {
        id: 'general-health',
        label: 'General Health Screening',
        description: 'Comprehensive metabolic panels'
      },
      {
        id: 'std-testing',
        label: 'STD/STI Testing',
        description: 'Sexual health screening'
      }
    ],
    priorities: [
      {
        id: 'comprehensive',
        label: 'Test Variety',
        icon: '🔬',
        description: 'Widest range of available tests'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Most cost-effective testing'
      },
      {
        id: 'speed',
        label: 'Fast Results',
        icon: '⚡',
        description: 'Quickest turnaround time for results'
      },
      {
        id: 'support',
        label: 'Results Interpretation',
        icon: '👨‍⚕️',
        description: 'Physician review and consultation'
      }
    ]
  },

  'sleep': {
    subcategories: [
      {
        id: 'insomnia',
        label: 'Insomnia Treatment',
        description: 'Medications and therapy for sleep issues'
      },
      {
        id: 'sleep-apnea',
        label: 'Sleep Apnea',
        description: 'Diagnosis and treatment for apnea'
      },
      {
        id: 'general',
        label: 'General Sleep Health',
        description: 'Overall sleep improvement'
      }
    ],
    priorities: [
      {
        id: 'support',
        label: 'Medical Guidance',
        icon: '👨‍⚕️',
        description: 'Expert sleep specialist support'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Most affordable sleep treatment'
      },
      {
        id: 'ease',
        label: 'Convenience',
        icon: '⚡',
        description: 'Easy online consultation and delivery'
      },
      {
        id: 'comprehensive',
        label: 'Treatment Options',
        icon: '📋',
        description: 'Wide range of sleep solutions'
      }
    ]
  },

  'herpes': {
    subcategories: [
      {
        id: 'suppressive-therapy',
        label: 'Suppressive Therapy',
        description: 'Daily medication to prevent outbreaks'
      },
      {
        id: 'outbreak-treatment',
        label: 'Outbreak Treatment',
        description: 'Medication for active outbreaks'
      },
      {
        id: 'testing',
        label: 'Testing & Diagnosis',
        description: 'HSV testing and consultation'
      }
    ],
    priorities: [
      {
        id: 'privacy',
        label: 'Maximum Privacy',
        icon: '🔒',
        description: 'Most discreet and confidential care'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Most affordable treatment options'
      },
      {
        id: 'speed',
        label: 'Fast Treatment',
        icon: '⚡',
        description: 'Quick access during outbreaks'
      },
      {
        id: 'support',
        label: 'Supportive Care',
        icon: '👨‍⚕️',
        description: 'Compassionate medical support'
      }
    ]
  },

  'peptides': {
    subcategories: [
      {
        id: 'research',
        label: 'Research Peptides',
        description: 'For research purposes only'
      },
      {
        id: 'wellness',
        label: 'Wellness Peptides',
        description: 'General health and wellness'
      },
      {
        id: 'performance',
        label: 'Performance Enhancement',
        description: 'Athletic and cognitive performance'
      }
    ],
    priorities: [
      {
        id: 'selection',
        label: 'Peptide Variety',
        icon: '📋',
        description: 'Widest selection of peptides'
      },
      {
        id: 'transparency',
        label: 'Quality & Purity',
        icon: '✓',
        description: 'Third-party testing and certificates'
      },
      {
        id: 'support',
        label: 'Research Support',
        icon: '👨‍⚕️',
        description: 'Guidance and educational resources'
      },
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Best pricing for research peptides'
      }
    ]
  },

  // Default fallback for guides without specific category
  'general': {
    subcategories: [
      {
        id: 'general',
        label: 'General Health',
        description: 'Overall health and wellness'
      }
    ],
    priorities: [
      {
        id: 'affordability',
        label: 'Affordability',
        icon: '💰',
        description: 'Best overall value'
      },
      {
        id: 'comprehensive',
        label: 'Comprehensive Care',
        icon: '🌟',
        description: 'Most complete health services'
      },
      {
        id: 'ease',
        label: 'Convenience',
        icon: '⚡',
        description: 'Easiest to use and access'
      },
      {
        id: 'support',
        label: 'Support Quality',
        icon: '👨‍⚕️',
        description: 'Best customer and medical support'
      }
    ]
  }
};
