import React, {FC, useEffect, useState} from 'react'
import {AppBar, Toolbar, Link} from "@material-ui/core";
import { useSession, signOut } from 'next-auth/client'

import TextButton from '@/common/components/Buttons/TextButton'
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import SignInModal from "@/modules/Auth/SignInModal/SignInModal";
import SignOutButton from "@/modules/Auth/Buttons/SignOutButton";
import LogoBook from "@/common/components/Logos/LogoBook";
import {useAppContext} from "@/context";
import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL} from "@/context/reducers/auth/reducersTypes";

const Header: FC = () => {
    const [paymentModalOpened, setPaymentModalOpened] = useState(false)
    const [openedTest, setOpenedTest] = useState(false)
    const [ session ] = useSession()
    const { state, dispatch } = useAppContext();
    const openSignInModal = () => dispatch({ type: OPEN_SIGN_IN_MODAL })
    const closeSignInModal = () => dispatch({type: CLOSE_SIGN_IN_MODAL})

    useEffect(() => {
        console.log(state)
        setOpenedTest(state.auth.signInModalOpened)
    }, [state.auth.signInModalOpened])

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
                            <div className={'p-3'}>
                                <LogoBook height={50} width={70}/>
                            </div>
                        </Link>
                        <div className={'ml-4 hidden sm:block'}>
                            <Link href={'/'}>
                                <TextButton text={'Teachers'}/>
                            </Link>
                        </div>
                    </div>
                    {session && <div className={'flex items-center'}>
                        <SimpleButton size={'small'} onClick={openPaymentModal} text={'Buy Credits'}/>
                        <div className={'ml-3'}>
                            <SignOutButton onClick={signOut} />
                        </div>
                    </div>}
                    {!session && <SignInModal
                        opened={openedTest}
                        handleOpen={openSignInModal}
                        handleClose={closeSignInModal}
                    />}
                </div>
            </Toolbar>
            <PaymentModal open={paymentModalOpened} handleClose={handlePaymentModalClose} />
        </AppBar>
    )
}

export default Header
