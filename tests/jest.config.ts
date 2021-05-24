// jest.config.js
export default {
	setupFilesAfterEnv: ["./jest.setup.js"],
	moduleNameMapper: {
		"^@(.*)$": "<rootDir>/src$1",
	},
};
