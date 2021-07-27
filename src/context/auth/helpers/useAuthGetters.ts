import jwtDecode from "jwt-decode";
import {useAppContext} from "@/context";
import Cookies from "js-cookie";
import User from "@/modules/Auth/types/User";

const useAuthGetters = () => {
	const { state } = useAppContext()

	const signInModalOpened = state.auth.signInModalOpened
	const token = state.auth.token || Cookies.get('token')
	let user: User = null
	if(token) {
		user = state.auth.user ?? jwtDecode(token)
	}

	return {
		signInModalOpened,
		token,
		user
	}
}

export default useAuthGetters
