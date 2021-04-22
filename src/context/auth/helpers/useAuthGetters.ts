import {useAppContext} from "@/context";

const useAuthGetters = () => {
    const { state } = useAppContext()

    const signInModalOpened = state.auth.signInModalOpened

    return {
        signInModalOpened
    }
}

export default useAuthGetters
