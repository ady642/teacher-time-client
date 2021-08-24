import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";

let registrationValidator: RegistrationValidator = new RegistrationValidator()

describe('RegistrationValidator', () => {
	test.each([
		{email:'ady@gmail', expected:false},
		{email:'ady@', expected:false},
		{email:'ady642@gmail.com', expected:true}
	])('should return $expected if email is $email', ({email, expected}) => {
		const registrationForm = new RegistrationForm({ email })
		registrationValidator = new RegistrationValidator(registrationForm)

		expect(registrationValidator.isEmailValid()).toBe(expected)
	});

	test.each([
		{password:'test', expected:false},
		{password:'testtest', expected:true},
		{password:'testtest!', expected:true}
	])('should return $expected if password is $password', ({password, expected}) => {
		const registrationForm = new RegistrationForm({ password })
		registrationValidator = new RegistrationValidator(registrationForm)

		expect(registrationValidator.isPasswordValid()).toBe(expected)
	});

	test.each([
		{password:'test', confirmationPassword: 'ady', expected:false},
		{password:'testtest', confirmationPassword: 'testtest', expected:true},
		{password:'testtest!', confirmationPassword: 'testtest!', expected:true}
	])('should return ($expected) if confirmationPassword is $password', ({password, confirmationPassword, expected}) => {
		const registrationForm = new RegistrationForm({ password, confirmationPassword })
		registrationValidator = new RegistrationValidator(registrationForm)

		expect(registrationValidator.isConfirmationPasswordValid()).toBe(expected)
	});
})
