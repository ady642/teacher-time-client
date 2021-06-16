require("dotenv").config();
const Webpackbar = require('webpackbar')

module.exports = {
	env: {
		PUBLIC_STRIPE_KEY: process.env.PUBLIC_STRIPE_KEY,
		BASE_URL: process.env.BASE_URL,
		SERVER_URL: process.env.SERVER_URL
	},
	webpack: (config, { isServer }) => {
		config.plugins.push(new Webpackbar({ name: isServer ? 'server' : 'client' }))
		return config
	}
};
