import {FC, useState} from 'react'
import {AppBar, Toolbar, Link} from "@material-ui/core";
import { useSession, signOut } from 'next-auth/client'

import Logo from '@/common/components/Logos/Logo'
import TextButton from '@/common/components/Buttons/TextButton'
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import SignInModal from "@/modules/Auth/SignInModal/SignInModal";
import SignOutButton from "@/modules/Auth/Buttons/SignOutButton";

type HeaderProps = {
    isMain: boolean
}

const Header: FC<HeaderProps> = ({isMain}) => {
    const [paymentModalOpened, setPaymentModalOpened] = useState(false)
    const [ session ] = useSession()

    const openPaymentModal = () => {
        setPaymentModalOpened(true)
    }

    const handlePaymentModalClose = () => {
        setPaymentModalOpened(false)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={'flex w-full items-center justify-between'}>
                    <div className={'flex items-center'}>
                        <Link href={'/'}>
                            <Logo/>
                        </Link>
                        <div className={'ml-4 hidden sm:block'}>
                            <Link href={'/'}>
                                <TextButton text={'Teachers'}/>
                            </Link>
                        </div>
                    </div>

                    {session && <div className={'flex items-center'}>
                        <SimpleButton size={'small'} onClick={openPaymentModal} text={'Acheter Credits'}/>
                        <div className={'ml-3'}>
                            <SignOutButton onClick={signOut} />
                        </div>
                    </div>}
                    {!session && <SignInModal />}
                </div>
            </Toolbar>
            <PaymentModal open={paymentModalOpened} handleClose={handlePaymentModalClose} />
        </AppBar>
    )
}

export default Header
