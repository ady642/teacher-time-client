import {useRouter} from "next/router";
import useAppReducers from "@/context/app/helpers/useAppReducers";

const useRoutePush = () => {
	const router = useRouter()

	const { setAppLoading } = useAppReducers()

	const goTo = async (locale: string, url: string) => {
		setAppLoading(true)
		await router.push(`/${locale}/${url}`)
		setAppLoading(false)
	}

	return { goTo }
}

export default useRoutePush
