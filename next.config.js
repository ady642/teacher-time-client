require("dotenv").config();
const Webpackbar = require('webpackbar')
const path = require('path')

module.exports = {
	reactStrictMode: false,
	env: {
		PUBLIC_STRIPE_KEY: process.env.PUBLIC_STRIPE_KEY,
		BASE_URL: process.env.BASE_URL,
		SERVER_URL: process.env.SERVER_URL
	},

	webpack: (config, { isServer }) => {
		config.plugins.push(new Webpackbar({ name: isServer ? 'server' : 'client' }))
		return config
	},
	i18n: {
		locales: ['en', 'fr'],
		defaultLocale: 'fr'
	},
	sassOptions: {
		prependData: `
        @import "src/common/styles/breakpoints";
      `,
		includePaths: [path.join(__dirname, 'src/common/styles')],
	},
};
