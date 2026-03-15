/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'space-bg': '#05060f',
        'space-surface': '#0d0f1e',
        'space-border': '#1a1d35',
        'accent-blue': '#4f8cff',
        'accent-violet': '#a78bfa',
        'text-primary': '#f0f4ff',
        'text-muted': '#8892b0',
        'status-live': '#22d3a5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
