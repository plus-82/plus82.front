import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'spoqa-han-sans-neo': ['var(--font-spoqa-han-sans-neo)'],
      },
    },
  },
  plugins: [],
}
export default config
