import User from "@/modules/Auth/types/User";

export interface StateInterface {
	auth: {
		signInModalOpened: boolean,
		registerModalOpened: boolean,
		token: string,
		user: User
	},
	payment: {
		balance: number
	},
	app: {
		loading: boolean
	}
}

const State: StateInterface = {
	auth: {
		signInModalOpened: false,
		registerModalOpened: false,
		token: '',
		user: null
	},
	payment: {
		balance: 0
	},
	app: {
		loading: false
	}
}

export default State
