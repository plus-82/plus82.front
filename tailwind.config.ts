import type { Config } from 'tailwindcss'

import { colors, fontSize } from './src/shared/config'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'spoqa-han-sans-neo': ['var(--font-spoqa-han-sans-neo)'],
      },
      colors,
      fontSize,
    },
  },
  plugins: [],
}
export default config
