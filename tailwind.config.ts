import type { Config } from 'tailwindcss'

export default {
  content: ['./node_modules/flowbite-react/lib/**/*{.jsx, ts, tsx}','./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config

