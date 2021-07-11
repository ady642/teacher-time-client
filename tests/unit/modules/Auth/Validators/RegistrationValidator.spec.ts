import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";

let registrationValidator: RegistrationValidator = new RegistrationValidator()

describe('RegistrationValidator', () => {
	it('should return false if email is invalid', () => {
		// Given I create a registration validator with bad email
		const registrationForm = new RegistrationForm({ email: 'ady@gmail' })
		registrationValidator = new RegistrationValidator(registrationForm)

		// Then isEmailValid method must be false
		expect(registrationValidator.isEmailValid()).toBeFalsy()
	})
})
