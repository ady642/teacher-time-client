import useObject from "@/common/hooks/useObject"
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";

describe('useObject', () => {
	test('set function must set a data of the object', () => {
		// Given a form is set at { email: '', password: '' }
		const registrationForm = new RegistrationForm()

		// When I set the email to ady642@gmail.com
		const { setObject } = useObject()
		setObject('email', 'ady642@gmail.com')

		// Then the email must be set
		expect(registrationForm).toEqual({ email: 'ady642@gmail.com', password: ''})
	})
})
