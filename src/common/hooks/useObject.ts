type setValueType<T> = (newValue: T) => void

type propertyType<T> = keyof T

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
