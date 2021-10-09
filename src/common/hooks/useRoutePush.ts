import {useRouter} from "next/router";
import useAppReducers from "@/context/app/helpers/useAppReducers";

const useRoutePush = () => {
	const router = useRouter()

	const { setAppLoading } = useAppReducers()

	const goTo = async (url: string, query?: any) => {
		setAppLoading(true)
		await router.push({ pathname: `/${url}`, query }, null, { shallow: true })
		setAppLoading(false)
	}

	return { goTo }
}

export default useRoutePush
