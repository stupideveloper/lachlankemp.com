const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: (theme) => ({
				dark: {
					css: {
						color: theme('colors.slate.300'),
						h1: {
							color: theme('colors.slate.300')
						},
						h2: {
							color: theme('colors.slate.400')
						},
						h3: {
							color: theme('colors.slate.500')
						},
						a: {
							color: theme('colors.blue.600')
						}
					},
				}

			}),
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
};
