/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F172A',      // Slate 900 - sophisticated dark
          secondary: '#475569',    // Slate 600 - muted gray
          accent: '#3B82F6',       // Blue 500 - minimal pop
          light: '#F8FAFC',        // Slate 50 - soft background
        },
        // Medical-specific color variants
        medical: {
          blue: {
            light: '#EFF6FF',      // Light blue background
            DEFAULT: '#3B82F6',    // Trust blue
            dark: '#1E40AF',       // Deep blue
          },
          green: {
            light: '#F0FDF4',      // Light green background
            DEFAULT: '#10B981',    // Health green
            dark: '#047857',       // Deep green
          },
          purple: {
            light: '#F5F3FF',      // Light purple background
            DEFAULT: '#8B5CF6',    // Premium purple
            dark: '#6D28D9',       // Deep purple
          },
        },
        success: '#10B981',        // Green 500
        warning: '#F59E0B',        // Amber 500
        info: '#3B82F6',           // Blue 500
        error: '#EF4444',          // Red 500 - for form validation
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
