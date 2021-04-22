import {useAppContext} from "@/context";
import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL} from "@/context/auth/reducers/reducersTypes";

const useAuthReducers = () => {
    const {dispatch} = useAppContext()

    const openSignInModal = () => dispatch({type: OPEN_SIGN_IN_MODAL})
    const closeSignInModal = () => dispatch({type: CLOSE_SIGN_IN_MODAL})

    return {
        openSignInModal,
        closeSignInModal
    }
}

export default useAuthReducers
