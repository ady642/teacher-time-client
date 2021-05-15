import {useRouter} from "next/router";
import useAppReducers from "@/context/app/helpers/useAppReducers";

const useRoutePush = () => {
	const router = useRouter()

	const { setAppLoading } = useAppReducers()

	const goTo = async (locale: string, url: string, query?: any) => {
		setAppLoading(true)
		await router.push({ pathname: `/${locale}/${url}`, query })
		setAppLoading(false)
	}

	return { goTo }
}

export default useRoutePush
