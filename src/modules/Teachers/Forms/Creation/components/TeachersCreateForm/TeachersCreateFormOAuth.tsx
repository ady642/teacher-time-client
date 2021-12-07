import {FunctionComponent} from "react";
import GoogleButton from "@/modules/Auth/components/Buttons/GoogleButton";
import useAuthServices from "@/modules/Auth/services/useAuthServices";
import useTranslation from "@/common/hooks/useTranslation";

interface TeachersCreateFormOAuthProps {
	hasAccount: boolean
}

const TeachersCreateFormOAuth: FunctionComponent<TeachersCreateFormOAuthProps> = ({ hasAccount }) => {
	const { loginWithGoogle } = useAuthServices()

	const { t } = useTranslation()

	return <div>
		<GoogleButton
			onClick={loginWithGoogle}
			text={hasAccount ? t('common.loginWithGoogle'): t('common.registerWithGoogle')}
		/>
	</div>
}

export default TeachersCreateFormOAuth
