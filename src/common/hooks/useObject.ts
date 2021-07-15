type setValueType<T> = (newValue: T) => void

const useObject = () => {
	const setObject = <T>(property: string, value: any, object: T, setValue: setValueType<T>) => {
		setValue({
			...object,
			[property]: value
		})
	}

	return {
		setObject
	}
}

export default useObject
