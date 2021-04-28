import {useAppContext} from "@/context";
import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL, SIGN_IN, SIGN_OUT} from "@/context/auth/reducers/reducersTypes";

const useAuthReducers = () => {
	const {dispatch} = useAppContext()

	const openSignInModal = () => dispatch({type: OPEN_SIGN_IN_MODAL})
	const closeSignInModal = () => dispatch({type: CLOSE_SIGN_IN_MODAL})
	const signIn = (provider: string) => dispatch({type: SIGN_IN, action: { payload: provider }})
	const signOut = () => dispatch({type: SIGN_OUT})

	return {
		openSignInModal,
		closeSignInModal,
		signIn,
		signOut
	}
}

export default useAuthReducers
