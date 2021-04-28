import { FunctionComponent } from 'react';
import GoogleButton from '@/modules/Auth/Buttons/GoogleButton';
import FacebookButton from '@/modules/Auth/Buttons/FacebookButton';
import Logo from '@/common/components/Logos/Logo';
import useAuthReducers from '@/context/auth/helpers/useAuthReducers';

const SignInModalContent: FunctionComponent = () => {
	const { signIn } = useAuthReducers();

	return (
		<div className="flex flex-col p-4 w-80">
			<div className="flex flex-col items-center mb-3">
				<Logo height={70} />
				<p className="my-4 text-gray-400">Log in to make a call to a teacher</p>
			</div>
			<GoogleButton onClick={() => signIn('google')} />
			<div className="mt-3">
				<FacebookButton onClick={() => signIn('facebook')} />
			</div>
		</div>
	);
};

export default SignInModalContent;
