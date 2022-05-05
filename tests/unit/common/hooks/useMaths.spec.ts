import useMaths from "@/common/hooks/useMaths";

const { round } = useMaths()


describe("useMaths", () => {
	it('should return 28 if I pass 27,50554 with 0 as decimals', () => {
		expect(round(27.50554, 0)).toEqual(28)
	})
	it('should return 27,5 if I pass 27,50454 with 1 as decimals', () => {
		expect(round(27.50454, 1)).toEqual(27.5)
	})
	it('should return 27,51 if I pass 27,50554 with 2 as decimals', () => {
		expect(round(27.50454, 2)).toEqual(27.50)
	})
	it('should return 27,505 if I pass 27,50454 with 3 as decimals', () => {
		expect(round(27.50454, 3)).toEqual(27.505)
	})
})
