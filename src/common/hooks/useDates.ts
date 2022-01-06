import dayjs from 'dayjs'


export const yearsPeriod = 10

const useDates = () => {
	const getMonths = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => dayjs().month(value))
	const getCurrentDate = () => dayjs().date()
	const getCurrentYear = () => dayjs().year()
	const getYears = () => Array.from({length: 10}, (_, index) => {
		if(index < yearsPeriod) {
			return dayjs().year(getCurrentYear() - index)
		}
	}).reverse()
	const getFirstDayOfCurrentYear = () => dayjs().format('YYYY-01-01')
	const getLastDayOfCurrentYear = () => dayjs().format('YYYY-12-31')
	const getFirstYearOf10YearsBeforeCurrentYear = () => `${getCurrentYear() - 10}-01-01`

	return {
		getMonths,
		getCurrentDate,
		getCurrentYear,
		getYears,
		getFirstDayOfCurrentYear,
		getLastDayOfCurrentYear,
		getFirstYearOf10YearsBeforeCurrentYear
	}
}

export default useDates
