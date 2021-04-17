import {FC, useState} from 'react'
import {AppBar, Toolbar, IconButton, Link} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';

import Logo from '@/common/components/Logos/Logo'
import TextButton from '@/common/components/Buttons/TextButton'
import SimpleButton from "@/common/components/Buttons/SimpleButton";
import PaymentModal from "@/modules/Payment/components/PaymentModal";

type HeaderProps = {
    isMain: boolean
}

const Header: FC<HeaderProps> = ({isMain}) => {
    const [paymentModalOpened, setPaymentModalOpened] = useState(false)

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
                                <TextButton text={'Professeurs'}/>
                            </Link>
                            <Link href={'/progression'}>
                                <TextButton text={'Ma Progression'}/>
                            </Link>
                        </div>
                    </div>

                    <div className={'flex items-center'}>
                        <SimpleButton size={'small'} onClick={openPaymentModal} text={'Acheter Credits'}/>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            className={'hidden sm:block'}
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </div>
            </Toolbar>
            <PaymentModal open={paymentModalOpened} handleClose={handlePaymentModalClose} />
        </AppBar>
    )
}

export default Header
