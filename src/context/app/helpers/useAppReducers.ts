import {useAppContext} from "@/context";
import {SET_APP_LOADING} from "@/context/app/reducers/reducersTypes";

const useAppReducers = () => {
	const {dispatch} = useAppContext()

	const setAppLoading = (loading: boolean) => {
		dispatch({type: SET_APP_LOADING, payload: loading})
	}

	return {
		setAppLoading
	}
}

export default useAppReducers
