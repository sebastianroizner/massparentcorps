import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        evergreen: { DEFAULT: '#1E5D4B', light: '#2A7560' },
        gold: { DEFAULT: '#C8A645', light: '#E4D3A2' },
        terracotta: '#B5532E',
        ivory: '#F7F4EC',
        ink: '#15251D',
        tint: { 100: '#ECF3F0', 200: '#D9E7E1', 300: '#C6DED4' },
      },
      maxWidth: { content: '1240px' },
      borderRadius: { card: '24px' },
    },
  },
  plugins: [],
}
export default config
