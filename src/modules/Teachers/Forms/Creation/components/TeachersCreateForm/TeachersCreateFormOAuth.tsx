import {FunctionComponent} from "react";
import GoogleButton from "@/modules/Auth/components/Buttons/GoogleButton";

interface TeachersCreateFormOAuthProps {

}

const TeachersCreateFormOAuth: FunctionComponent<TeachersCreateFormOAuthProps> = () => {
	return <div>
		<GoogleButton onClick={() => console.log('test')} />
	</div>
}

export default TeachersCreateFormOAuth
