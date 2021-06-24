// tailwind.config.js
module.exports = {
	purge: false,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: theme => ({
			...theme('colors'),
			'orange': '#fa5a5f',
			'blueviolet': '#454e9e',
			'customgray': '#f9f8f8'
		}),
		textColor: theme => ({
			...theme('colors'),
			'orange': '#fa5a5f',
			'blueviolet': '#454e9e',
			'customgray': '#f9f8f8'
		})
	},
	variants: {
		extend: {},
	},
	plugins: [],
	important: true
}
