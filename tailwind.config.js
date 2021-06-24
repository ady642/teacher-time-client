// tailwind.config.js
module.exports = {
	purge: false,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: theme => ({
			...theme('colors'),
			'orange': '#fa5a5f',
			'blueviolet': '#454e9e'
		}),
		textColor: theme => ({
			...theme('colors'),
			'blueviolet': '#454e9e'
		})
	},
	variants: {
		extend: {},
	},
	plugins: [],
	important: true
}
