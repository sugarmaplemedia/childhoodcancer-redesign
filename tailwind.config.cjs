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
          'navy-super-light': '#DEE8FC',
          'navy-light': '#85A7EB',
          'navy-dark': '#1F3155'
        },
        fontFamily: {
            sans: ['URW-Din', 'Arial'],
            menu: ['stencil-creek', 'Arial'],
            titles: ['grueber', 'Arial']
        },
        extend: {
            backgroundImage: {
                'landing-hero': "url('/images/landing-hero.jpg')"
            },
            brightness: {
                65: '.65'
            },
            dropShadow: {
                'blue': '0 2px 4px rgba(31, 49, 85, 0.35)'
            },
            minWidth: {
                '2400px': '1800px'
            },
            rotate: {
                '9': '11deg',
            },
            saturate: {
                75: '.75'
            },
            spacing: {
                'button': '3.25rem',
                '22': '5.5rem',
                'programs': '10.5rem',
                'resources': '21rem',
            },
            transitionTimingFunction: {
                'bounce': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
            },
        }
    },
	plugins: [],
}
