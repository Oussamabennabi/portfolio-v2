 import defaultTheme from  'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'2md': { max: '1077px' },
			'3xs': { max: '860px' },
			'4xs': { max: '825px' },
			'3xl': { max: '1300px' },
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				'primary-pink': '#e50072',
				'primary-yellow': '#f1c40f',
				'primary-purple': '#750085',
				'gray-color': '#c8c8c8',
				'gray-dark': '#313131ee',
			},
		},
	},
	plugins: [],
};
