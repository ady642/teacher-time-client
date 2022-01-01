import dayjs from 'dayjs'


const useDates = () => {
	const getMonths = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => dayjs().month(value))
	const getCurrentDate = () => dayjs().date()

	return {
		getMonths,
		getCurrentDate
	}
}

export default useDates
