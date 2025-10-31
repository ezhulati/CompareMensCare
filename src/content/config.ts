import { defineCollection, z } from 'astro:content';

const brands = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    logo: z.string().optional(),
    description: z.string(),
    categories: z.array(z.enum([
      'sexual-health',
      'hair-health',
      'testosterone',
      'weight-loss',
      'mental-health',
      'diagnostics'
    ])),
    rating: z.number().min(0).max(5),
    reviewCount: z.number().optional(),
    affiliateLink: z.string(),
    affiliateId: z.string(),
    cookieDays: z.number(),
    commission: z.string().optional(),
    pricing: z.object({
      consultationFee: z.string(),
      medicationFrom: z.string().optional(),
      subscriptionType: z.string(),
      priceMin: z.number().optional(),
      priceMax: z.number().optional(),
      currency: z.string().default('USD'),
    }),
    services: z.array(z.string()),
    availability: z.object({
      countries: z.array(z.string()),
      states: z.array(z.string()).optional(),
    }),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    // "Best For" framework attributes
    bestFor: z.array(z.object({
      label: z.string(),
      variant: z.enum(['primary', 'success', 'warning', 'neutral', 'premium']).default('primary'),
      icon: z.string().optional(),
      category: z.string().optional(), // Category-specific best for
    })).optional(),
    // Priority matching scores (0-10 scale)
    priorities: z.object({
      affordability: z.number().min(0).max(10).optional(),
      privacy: z.number().min(0).max(10).optional(),
      speed: z.number().min(0).max(10).optional(),
      selection: z.number().min(0).max(10).optional(),
      transparency: z.number().min(0).max(10).optional(),
      ease: z.number().min(0).max(10).optional(),
      support: z.number().min(0).max(10).optional(),
      insurance: z.number().min(0).max(10).optional(),
      comprehensive: z.number().min(0).max(10).optional(),
    }).optional(),
    // Feature highlights
    features: z.object({
      freeConsultation: z.boolean().default(false),
      subscriptionRequired: z.boolean().default(false),
      insuranceAccepted: z.boolean().default(false),
      sameDayShipping: z.boolean().default(false),
      discretePackaging: z.boolean().default(true),
      cancelAnytime: z.boolean().default(true),
      mobileApp: z.boolean().default(false),
      pharmacyPickup: z.boolean().default(false),
    }).optional(),
    featured: z.boolean().default(false),
    publishDate: z.date(),
    lastReviewed: z.date(),
    reviewerName: z.string().optional(),
    reviewerCredentials: z.string().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'sexual-health',
      'hair-health',
      'testosterone',
      'weight-loss',
      'mental-health',
      'diagnostics',
      'general'
    ]),
    image: z.string().optional(),
    publishDate: z.date(),
    lastReviewed: z.date(),
    author: z.string(),
    medicalReviewer: z.string().optional(),
    summary: z.string().optional(),
    summaryPoints: z.array(z.string()).optional(),
    researchHours: z.number().optional(),
    sourcesReviewed: z.number().optional(),
    keyTakeaways: z.array(z.string()).optional(),
    faqTitle: z.string().optional(),
    faqCategory: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    citations: z.array(z.object({
      title: z.string(),
      url: z.string(),
      source: z.string(),
    })).optional(),
    featured: z.boolean().default(false),
  }),
});

const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    brand1: z.string(),
    brand2: z.string(),
    category: z.enum([
      'sexual-health',
      'hair-health',
      'testosterone',
      'weight-loss',
      'mental-health',
      'diagnostics'
    ]),
    publishDate: z.date(),
    lastReviewed: z.date(),
    author: z.string(),
    verdict: z.object({
      winner: z.string().optional(),
      brand1BestFor: z.string(),
      brand2BestFor: z.string(),
    }),
    comparisonTable: z.array(z.object({
      feature: z.string(),
      brand1Value: z.string(),
      brand2Value: z.string(),
    })),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.array(z.string()),
    tags: z.array(z.string()),
    publishDate: z.date(),
    author: z.string(),
    featured: z.boolean().default(false),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    conditions: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  brands,
  guides,
  comparisons,
  blog,
  categories,
};
