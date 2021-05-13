import { toast } from 'react-toastify';

const useToast = () => {
	const displayToastSuccess = (text = '') => {
		toast.success(text)
	}

	const displayToastError = (text = '') => {
		toast.error(text)
	}

	const displayToastInfo = (text = '') => {
		toast.info(text)
	}

	return { displayToastError, displayToastSuccess, displayToastInfo }
}

export default useToast
