import {FunctionComponent} from "react";
import {signIn} from "next-auth/client";
import GoogleButton from "@/modules/Auth/Buttons/GoogleButton";
import FacebookButton from "@/modules/Auth/Buttons/FacebookButton";

const SignInModalContent: FunctionComponent = () => {
    return <div className={'flex flex-col p-4 w-80'}>
            <div className={'flex flex-col items-center mb-3'}>
                <span className={'text-2xl'}>Sign in to</span>
                <span>Teacher-time.com</span>
                <p className={'my-4 text-gray-400'}>Log in to make call to a teacher</p>
            </div>
            <GoogleButton onClick={() => signIn('google')} />
            <div className={'mt-3'}>
                <FacebookButton onClick={() => signIn('facebook')} />
            </div>
        </div>
}

export default SignInModalContent
