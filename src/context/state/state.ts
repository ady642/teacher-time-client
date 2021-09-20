import User from "@/modules/Auth/types/User";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import {Room} from "@/modules/Room/types";

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
	},
	user: {
		teacher: Teacher,
		available: boolean
	},
	room: {
		rooms: Room[],
		roomID: string
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
	},
	user: {
		teacher: null,
		available: false
	},
	room: {
		rooms: new Array<Room>(),
		roomID: null
	}
}

export default State
