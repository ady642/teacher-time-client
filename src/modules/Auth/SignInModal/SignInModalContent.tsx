import { FunctionComponent } from 'react';
import GoogleButton from '@/modules/Auth/Buttons/GoogleButton';
import FacebookButton from '@/modules/Auth/Buttons/FacebookButton';
import Logo from '@/common/components/Logos/Logo';
import AuthService from "@/modules/Auth/services/AuthService";
import useTranslation from "@/common/hooks/useTranslation";

const SignInModalContent: FunctionComponent = () => {
	const authService = new AuthService('')
	const { t } = useTranslation()

	const signIn = (provider: string) => {
		authService.signIn(provider)
	}

	return (
		<div className="flex flex-col p-4 w-80">
			<div className="flex flex-col items-center mb-3">
				<Logo height={70} />
				<p className="my-4 text-gray-400 text-center">{ t('common.loginPhrase') }</p>
			</div>
			<GoogleButton onClick={() => signIn('google')} />
			<div className="mt-3">
				<FacebookButton onClick={() => signIn('facebook')} />
			</div>
		</div>
	);
};

export default SignInModalContent;
