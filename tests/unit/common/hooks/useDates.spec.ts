import useDates from "@/common/hooks/useDates";

const { getFirstDayOfCurrentYear, getLastDayOfCurrentYear } = useDates()

describe('useDates', () => {
	it('should return the first date of the first day', () => {
		expect(getFirstDayOfCurrentYear()).toBe('2022-01-01')
	})
	it('should return the last date of the last day', () => {
		expect(getLastDayOfCurrentYear()).toBe('2022-12-31')
	})
})
