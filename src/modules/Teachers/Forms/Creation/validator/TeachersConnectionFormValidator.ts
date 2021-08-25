import RegistrationValidator from "@/modules/Auth/validators/RegistrationValidator";

export default class TeachersConnectionFormValidator extends RegistrationValidator {
	isFilled(): boolean {
		return !!this.email && !!this.password && !!this.firstName && !!this.lastName
	}
}
