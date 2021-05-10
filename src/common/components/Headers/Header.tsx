import React, {FC, useState} from 'react'
import {AppBar, Toolbar, Link} from "@material-ui/core";

import TextButton from '@/common/components/Buttons/TextButton'
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import SignInModal from "@/modules/Auth/SignInModal/SignInModal";
import SignOutButton from "@/modules/Auth/Buttons/SignOutButton";
import LogoBook from "@/common/components/Logos/LogoBook";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import CreditsNumber from "@/modules/Payment/components/CreditsNumber";
import usePaymentGetters from "@/context/payment/helpers/usePaymentGetters";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
	const [paymentModalOpened, setPaymentModalOpened] = useState(false)
	const { openSignInModal, closeSignInModal, resetToken } = useAuthReducers()
	const { signInModalOpened, token } = useAuthGetters()
	//const { balance } = usePaymentGetters()

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
					{token && <div className={'flex items-center'}>
						<div className={'mr-4'}>
							{/*<CreditsNumber credits={balance} />*/}
						</div>
						<SimpleButton size={'small'} onClick={openPaymentModal} text={'Buy Credits'}/>
						<div className={'ml-3'}>
							<SignOutButton onClick={resetToken} />
						</div>
					</div>}
					{!token && <SignInModal
						opened={signInModalOpened}
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
