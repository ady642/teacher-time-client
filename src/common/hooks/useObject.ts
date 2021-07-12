type objectType<T> = {
    [Property in keyof T]: any;
}

type setValueType<T> = (newValue: T) => T

type propertyType<T> = keyof T

type useObjectType<T> = (property: propertyType<T>, value: unknown, object: objectType<T>, setValue: setValueType<T>) => {
    setObject: (property: propertyType<unknown>, object: objectType<unknown>) => void
}

const useObject: useObjectType<unknown> = (property, value, object, setValue) => {
    const setObject = (property: propertyType<T>, object: objectType<unknown>) => {
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
