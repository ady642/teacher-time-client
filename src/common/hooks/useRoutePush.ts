import {useRouter} from "next/router";
import useAppReducers from "@/context/app/helpers/useAppReducers";

const useRoutePush = () => {
	const router = useRouter()

	const { setAppLoading } = useAppReducers()

	const goTo = async (url: string, query?: any, shallow = true) => {
		setAppLoading(true)
		await router.push({ pathname: `/${url}`, query }, null, { shallow })
		setAppLoading(false)
	}

	return { goTo, router }
}

export default useRoutePush
