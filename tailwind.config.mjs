/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          primary: '#0F172A',      // Slate 900 - sophisticated dark
          secondary: '#475569',    // Slate 600 - muted gray
          accent: '#0066CC',       // IBM Watson Health blue - trust & authority
          light: '#F8FAFC',        // Slate 50 - soft background
        },
        // Clinical color palette - inspired by healthcare platforms
        medical: {
          blue: {
            50: '#EFF6FF',         // Lightest blue background
            100: '#DBEAFE',        // Light blue hover states
            200: '#BFDBFE',        // Border blue
            500: '#0066CC',        // Primary medical blue (IBM Watson Health)
            600: '#0052A3',        // Hover state
            700: '#003D7A',        // Active state
            900: '#001F3F',        // Darkest blue
          },
          green: {
            50: '#F0FDF4',         // Lightest green background
            100: '#DCFCE7',        // Light green hover
            500: '#059669',        // Clinical success green (darker than default)
            600: '#047857',        // Hover green
            700: '#065F46',        // Active green
          },
          gray: {
            50: '#F9FAFB',         // Background gray
            100: '#F3F4F6',        // Card background
            200: '#E5E7EB',        // Border gray
            300: '#D1D5DB',        // Disabled gray
            400: '#9CA3AF',        // Placeholder text
            500: '#6B7280',        // Secondary text
            600: '#4B5563',        // Body text
            700: '#374151',        // Headings
            800: '#1F2937',        // Dark headings
            900: '#111827',        // Almost black
          },
          // Semantic colors for medical context
          trust: '#0066CC',        // Primary trust color
          safety: '#059669',       // Safety/approval green
          alert: '#DC2626',        // Critical/error red
          caution: '#D97706',      // Warning amber (more professional than bright yellow)
        },
        // Semantic intent colors
        success: '#059669',        // Clinical green (less bright)
        warning: '#D97706',        // Amber 600 (more professional)
        info: '#0066CC',           // Medical trust blue
        error: '#DC2626',          // Red 600 (less screaming)
      },
      fontFamily: {
        // Display - Large headlines, hero text (H1-H2) - Epilogue for premium sharpness
        display: ['Epilogue', '-apple-system', 'system-ui', 'sans-serif'],

        // Heading - Section titles, cards (H3-H6) - Epilogue for consistency
        heading: ['Epilogue', '-apple-system', 'system-ui', 'sans-serif'],

        // Body - Paragraphs, descriptions, main content - Inter for readability
        sans: ['Inter', '-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],

        // Mono - Pricing, stats, data, technical specs
        mono: ['Space Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Note: We use fluid typography with clamp() in global.css
        // These are fallback/utility sizes for edge cases
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        // Card spacing system - responsive padding scale
        'card-xs': '0.75rem',   // 12px - Tight spacing
        'card-sm': '1rem',      // 16px - Mobile standard
        'card-md': '1.25rem',   // 20px - Tablet standard
        'card-lg': '1.5rem',    // 24px - Desktop standard
        'card-xl': '2rem',      // 32px - Desktop generous
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      // Enterprise shadow system - layered, sophisticated depth
      boxShadow: {
        // Soft elevation - resting state for cards
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        // Medium elevation - hover states
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
        // Strong elevation - active/focused states
        'strong': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
        // Overlay - modals, popovers
        'overlay': '0 24px 48px rgba(0, 0, 0, 0.16), 0 12px 24px rgba(0, 0, 0, 0.12)',
        // Glow effects for premium elements
        'glow-blue': '0 0 20px rgba(0, 102, 204, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'glow-blue-strong': '0 0 40px rgba(0, 102, 204, 0.2), 0 8px 24px rgba(0, 102, 204, 0.15)',
        'glow-green': '0 0 20px rgba(5, 150, 105, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
        // Inner glow for glass effects
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px rgba(0, 0, 0, 0.04)',
      },
      // Gradient utilities
      backgroundImage: {
        // Primary gradients
        'gradient-primary': 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #0052A3 0%, #003D7A 100%)',

        // Mesh gradients for backgrounds
        'mesh-blue': 'radial-gradient(at 0% 0%, rgba(0, 102, 204, 0.08) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(5, 150, 105, 0.08) 0%, transparent 50%)',
        'mesh-blue-strong': 'radial-gradient(at 0% 0%, rgba(0, 102, 204, 0.12) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(5, 150, 105, 0.12) 0%, transparent 50%)',

        // Quick Pick gradients
        'gradient-emerald-soft': 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, white 100%)',
        'gradient-emerald-medium': 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, white 100%)',
        'gradient-purple-soft': 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, white 100%)',
        'gradient-purple-medium': 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, white 100%)',
        'gradient-amber-soft': 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, white 100%)',
        'gradient-amber-medium': 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, white 100%)',
        'gradient-blue-soft': 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, white 100%)',
        'gradient-blue-medium': 'linear-gradient(135deg, rgba(0, 102, 204, 0.08) 0%, white 100%)',

        // Stat card gradients
        'gradient-stat': 'linear-gradient(135deg, rgba(0, 102, 204, 0.03) 0%, rgba(5, 150, 105, 0.03) 100%)',

        // Text gradients
        'gradient-text-blue-green': 'linear-gradient(135deg, #0066CC, #059669)',
        'gradient-text-blue': 'linear-gradient(135deg, #0F172A 0%, #475569 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
