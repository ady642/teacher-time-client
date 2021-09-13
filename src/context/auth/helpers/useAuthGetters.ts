import jwtDecode from "jwt-decode";
import {useAppContext} from "@/context";
import Cookies from "js-cookie";
import User from "@/modules/Auth/types/User";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";

type Token = {
	firstName: string;
	lastName: string;
	email: string;
	id: string;
	iat: number;
	exp: number;
}

const useAuthGetters = () => {
	const { state } = useAppContext()
	const { resetToken } = useAuthReducers()

	const signInModalOpened = state.auth.signInModalOpened
	const registerModalOpened = state.auth.registerModalOpened
	const token = state.auth.token || Cookies.get('token')
	let user: User = null
	if(token) {
		if(jwtDecode<Token>(token).exp < Date.now() / 1000) {
			resetToken()
		} else {
			user = state.auth.user ?? jwtDecode(token)
		}
	}

	return {
		signInModalOpened,
		registerModalOpened,
		token,
		user
	}
}

export default useAuthGetters
