import {useAppContext} from "@/context";

const useAppGetters = () => {
	const { state } = useAppContext()

	const appLoading = state.app.loading

	return {
		appLoading,
	}
}

export default useAppGetters
