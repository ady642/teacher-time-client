export default () => {
	const round = (value: number, decimals = 0): number => {
		let factor = 1

		for(let i = 0; i < decimals; i++) {
			factor *= 10
		}

		return Math.round(value * factor) / factor
	}

	return {
		round
	}
}

