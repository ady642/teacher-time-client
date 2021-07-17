import React, {FC, useState} from 'react'
import {AppBar, Toolbar, Link} from "@material-ui/core";

import TextButton from '@/common/components/Buttons/TextButton'
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import LoginModal from "@/modules/Auth/LoginModal/SignInModal";
import LogoBook from "@/common/components/Logos/LogoBook";
import useAuthReducers from "@/context/auth/helpers/useAuthReducers";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import useTranslation from "@/common/hooks/useTranslation";

interface HeaderProps {
	locale: string
}

const Header: FC<HeaderProps> = ({ locale }) => {
	const [paymentModalOpened, setPaymentModalOpened] = useState(false)
	const { openSignInModal, closeSignInModal } = useAuthReducers()
	const { signInModalOpened, token } = useAuthGetters()
	const { t } = useTranslation()

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
							<Link href={`/${locale}`}>
								<TextButton text={t('common.teachers')}/>
							</Link>
							<Link href={`/${locale}/contact`}>
								<TextButton text='Contact'/>
							</Link>
						</div>
					</div>
					{token && <div className={'flex items-center'}>
						{/*<div className={'mr-4'}>
							<CreditsNumber credits={balance} />
						</div>
						<SimpleButton size={'small'} onClick={openPaymentModal} text={'Buy Credits'}/>*/}
						<div className={'ml-3'}>
						</div>
					</div>}
					{!token && <LoginModal
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
