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
        sans: ['Inter var', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        display: ['Inter var', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      fontSize: {
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
        // Medical-specific utility sizes
        'disclaimer': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'caption': ['0.8125rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
