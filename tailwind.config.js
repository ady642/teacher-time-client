// tailwind.config.js
module.exports = {
	purge: false,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: theme => ({
			...theme('colors'),
			'orange': '#fa5a5f',
		})
	},
	variants: {
		extend: {},
	},
	plugins: [],
	important: true
}
