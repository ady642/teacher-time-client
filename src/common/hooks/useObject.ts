type setValueType<T> = (newValue: T) => void

const useObject = () => {
	const setObject = <
		T, Prop extends keyof T, Value extends T[Prop]
		>(property: Prop, value: Value, object: T, setValue: setValueType<T & Record<Prop, Value>>) => {
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
