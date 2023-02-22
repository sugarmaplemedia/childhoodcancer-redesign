/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#FFFFFF',
          'orange': '#FFB419',
          'orange-light': '#FFE3A6',
          'navy': '#4B6496',
          'navy-light': '#85A7EB',
          'navy-dark': '#1F3155'
        },
        fontFamily: {
            sans: ['URW Din', 'Arial']
        },
        extend: {
            spacing: {
              'button': '3.72rem',
            }
        }
    },
	plugins: [],
}
