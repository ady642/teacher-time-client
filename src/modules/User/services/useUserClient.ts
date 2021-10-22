import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import {useState} from "react";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import constants from "@/common/constants";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import UserClient from "@/modules/User/services/UserClient";
import User from "@/modules/Auth/types/User";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";

const useUserClient = () => {
	const { user, token } = useAuthGetters()
	const { teacher } = useUserGetters()
	const { setTeacher } = useUserReducers()
	const { setUser } = useAuthReducers()
	const userClient = new UserClient(token)
	const [error, setError] = useState('')
	const [submitStatus, setSubmitStatus] = useState(constants.SUBMIT_STATUS.PENDING)

	const modifyUser = async (userPayload: Partial<User>) => {
		const userWithId: User = {
			firstName: userPayload.firstName,
			lastName: userPayload.lastName,
			email: userPayload.email,
			_id: user._id
		}

		try {
			setSubmitStatus(constants.SUBMIT_STATUS.LOADING)
			await userClient.modifyUser(userWithId)
			setSubmitStatus(constants.SUBMIT_STATUS.OK)
			setTeacher({ ...teacher, user: userWithId })
			setUser({ ...user, ...userWithId})
		} catch (error) {
			setError(error.message)
			setSubmitStatus(constants.SUBMIT_STATUS.ERROR)
		}
	}

	return {
		modifyUser,
		error,
		submitStatus
	}
}

export default useUserClient
