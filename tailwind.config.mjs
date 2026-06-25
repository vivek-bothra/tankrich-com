/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1115',
        body: '#3a3f4a',
        muted: '#71757f',
        border: '#e8e9ee',
        accent: '#2563eb',
        'bg-alt': '#f4f5f7',
        'status-live': '#1aa06d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
