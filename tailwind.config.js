module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",    
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'display': [ 'SpaceGrotesk', 'sans-serif'],
    },
    extend: {
      letterSpacing: {
        extra: '-0.15rem',
        ultra: '-0.32rem'
      },
      colors: {
        indigo: {
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        slate: {
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        light: "#E0E7FF",
        dark: "#111827"
      }
    },
  },

  
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}
