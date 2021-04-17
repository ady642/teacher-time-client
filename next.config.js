require("dotenv").config();

module.exports = {
    env: {
        PUBLIC_STRIPE_KEY: process.env.PUBLIC_STRIPE_KEY
    }
};
