import Cookies from 'js-cookie'


const useCookies = () => {
	const getCookie = (name: string) => Cookies.get(name)

	const setCookie = (name: string, value: any) => {
		Cookies.set(name, value)
	}

	return {
		getCookie,
		setCookie
	}
}

export default useCookies
