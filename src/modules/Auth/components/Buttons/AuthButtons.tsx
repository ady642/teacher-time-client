import React, {FunctionComponent} from "react";
import LoginModal from "@/modules/Auth/components/LoginModal/LoginModal";
import RegisterModal from "@/modules/Auth/components/RegisterModal/RegisterModal";

const AuthButtons: FunctionComponent = () => {
	return <div className="flex">
		<LoginModal />
		<RegisterModal />
	</div>
}

export default AuthButtons
