import dayjs from 'dayjs'


const yearsPeriod = 9

const useDates = () => {
	const getMonths = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => dayjs().month(value))
	const getCurrentDate = () => dayjs().date()
	const getCurrentYear = () => dayjs().year()
	const getYears = () => [].map((_,index) => {
		if(index < yearsPeriod / 2) {
			return dayjs(getCurrentYear() - index)
		}

		if(index > yearsPeriod / 2) {
			return dayjs(getCurrentYear() + index - 5)
		}
	})

	return {
		getMonths,
		getCurrentDate,
		getCurrentYear,
		getYears
	}
}

export default useDates
