import {FunctionComponent} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import { useSession, signIn, signOut } from 'next-auth/client'

const Progression: FunctionComponent = () => {
    const [ session ] = useSession()

    if(session) {
        return <>
            <img alt='avatar' src={session.user.image} />
            Signed in as {session.user.name} <br/>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        Not signed in <br/>
        <div className={'flex flex-col'}>
            <button onClick={() => signIn('google')}>Sign In With Google</button>
            <button onClick={() => signIn('facebook')}>Sign In With Facebook</button>
        </div>
    </>
}

(Progression as PageWithLayoutType).layout = DefaultLayout

export default Progression