import {FunctionComponent} from "react";
import SimpleButton from "@/common/components/Buttons/SimpleButton";

interface SignInModalActivatorProps {
    onClick: () => void
}

const SignInModalActivator: FunctionComponent<SignInModalActivatorProps> = ({ onClick }) => {
	return <SimpleButton text={'Sign In'} onClick={onClick} />
}

export default SignInModalActivator
