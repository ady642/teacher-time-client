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
			'customgray': '#f9f8f8',
			'bluegreen': '#149BB4'
		}),
		textColor: theme => ({
			...theme('colors'),
			'orange': '#fa5a5f',
			'blueviolet': '#454e9e',
			'customgray': '#f9f8f8',
			'bluegreen': '#149BB4'
		}),
		borderColor: theme => ({
			...theme('colors'),
			'orange': '#fa5a5f',
			'blueviolet': '#454e9e',
			'customgray': '#f9f8f8',
			'bluegreen': '#149BB4'
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
	important: true
}
