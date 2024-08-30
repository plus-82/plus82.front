import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'spoqa-han-sans-neo': ['var(--font-spoqa-han-sans-neo)'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        error: '#E41212',
        success: '#00CB3D',
        gray: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        blue: {
          50: '#F0F4FF',
          100: '#BDE1FF',
          200: '#92CFFF',
          300: '#64BBFF',
          400: '#41ABFF',
          500: '#269CFF',
          600: '#2D8DFF',
          700: '#2F7AF3',
          800: '#3068E0',
          900: '#3047C1',
        },
      },
    },
  },
  plugins: [],
}
export default config
