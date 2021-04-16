import {FC} from 'react'
import {AppBar, Toolbar, IconButton, Link} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';

import Logo from '@/common/components/Logos/Logo'
import TextButton from '@/common/components/Buttons/TextButton'
import SimpleButton from "@/common/components/Buttons/SimpleButton";

type HeaderProps = {
    isMain: boolean
}

const Header: FC<HeaderProps> = ({isMain}) => {
    const goToPayment = () => {

    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={'flex w-full items-center justify-between'}>
                    <div className={'flex items-center'}>
                        <Link href={'/'}>
                            <Logo/>
                        </Link>
                        <div className={'ml-4'}>
                            <Link href={'/'}>
                                <TextButton text={'Professeurs'}/>
                            </Link>
                            <Link href={'/progression'}>
                                <TextButton text={'Ma Progression'}/>
                            </Link>
                        </div>
                    </div>

                    <div className={'flex items-center'}>
                        <Link href={'/payment'}>
                            <SimpleButton text={'Acheter Credits'}/>
                        </Link>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
