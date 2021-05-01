import jwt_decode from "jwt-decode";
import {useAppContext} from "@/context";
import UserSession from "@/common/types/UserSession";

const useAuthGetters = () => {
	const { state } = useAppContext()

	const signInModalOpened = state.auth.signInModalOpened
	const token = state.auth.token
	let user: UserSession = null
	if(token) {
		user = jwt_decode(token);
	}

	return {
		signInModalOpened,
		token,
		user
	}
}

export default useAuthGetters
