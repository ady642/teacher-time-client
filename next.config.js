require("dotenv").config();

module.exports = {
	env: {
		PUBLIC_STRIPE_KEY: process.env.PUBLIC_STRIPE_KEY,
		BASE_URL: process.env.BASE_URL,
		SERVER_URL: process.env.SERVER_URL,
		SOCKET_SERVER: process.env.SOCKET_SERVER
	}
};
