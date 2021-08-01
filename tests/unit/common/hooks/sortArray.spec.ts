import AboutText from "@/modules/Contact/components/AboutText";

const PUT_B_IN_UPPER_POSITION = 1
const PUT_A_IN_UPPER_POSITION = -1
const DONT_CHANGE_POSITION = 0

const useArrayHelper = () => {
	const sortArrayByAlphabeticalOrder = <T, Prop extends keyof T>(array: T[], sortBy: Prop): T[] => {
		return array.sort((a,b) => {
			if(a[sortBy] > b[sortBy]) {
				return PUT_B_IN_UPPER_POSITION
			} else if(b[sortBy] > a[sortBy]) {
				return PUT_A_IN_UPPER_POSITION
			} else {
				return DONT_CHANGE_POSITION
			}
		})
	}

	return {
		sortArrayByAlphabeticalOrder
	}
}

type objectType = {
	name: string;
}

describe('sortArray', () => {
	it('should sort array by alphabetical order given an array and the key to sort', () => {
		// Given I have an array of object
		const myArrayToSort: objectType[] = [{
			name: 'Gamma'
		},{
			name: 'Alpha'
		}, {
			name: 'Beta'
		}, {
			name: 'Phi'
		}]

		// When I call sortArrayByAlphabeticalOrder
		const { sortArrayByAlphabeticalOrder }  = useArrayHelper()
		const myFilteredArray: objectType[] = sortArrayByAlphabeticalOrder(myArrayToSort, 'name')

		// Then sortArrayByAlphabeticalOrder must return the array sorted by name property
		expect(myFilteredArray).toEqual([{
			name: 'Alpha'
		},{
			name: 'Beta'
		}, {
			name: 'Gamma'
		}, {
			name: 'Phi'
		}])
	})
})
