import {useAppContext} from "@/context";
import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL, SET_TOKEN, RESET_TOKEN} from "@/context/auth/reducers/reducersTypes";

const useAuthReducers = () => {
	const {dispatch} = useAppContext()

	const openSignInModal = () => dispatch({type: OPEN_SIGN_IN_MODAL})
	const closeSignInModal = () => dispatch({type: CLOSE_SIGN_IN_MODAL})
	const setToken = (token: string) => dispatch({type: SET_TOKEN, payload: token})
	const resetToken = () => dispatch({type: RESET_TOKEN})

	return {
		openSignInModal,
		closeSignInModal,
		setToken,
		resetToken
	}
}

export default useAuthReducers
