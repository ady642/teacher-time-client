import React, {FC} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";

import NavItem from "@/common/components/Headers/NavItem";

import Logo from "@/common/components/Logos/Logo";
import AuthButtons from "@/modules/Auth/components/Buttons/AuthButtons";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import dynamic from "next/dynamic";

const ConnectedComponent = dynamic(() => import('@/common/components/Headers/ConnectedComponent'))

interface HeaderProps {
    locale: string;
    openAboutModal: () => void;
	openPaymentModal: () => void;
    dark?: boolean;
}

const Header: FC<HeaderProps> = ({ locale, openAboutModal, openPaymentModal}) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()
	const { token } = useAuthGetters()

	const goToTeachers = async () => {
		await goTo(locale, 'teachers')
	}

	const goToContact = async () => {
		await goTo(locale, 'contact')
	}

	const goToHome = async () => {
		await goTo(locale, '/')
	}

	const navItems = [
		{
			onClick: () => goToTeachers(),
			translationKey: 'common.teachersList'
		},
		{
			onClick: () => openAboutModal(),
			translationKey: 'common.about'
		},
		{
			onClick: () => goToContact(),
			translationKey: 'common.giveClasses'
		}
	]

	return (
		<div className={'flex items-center sm:px-6 sm:pt-6 sm:pb-3 p-2 bg-white justify-between'}>
			<div className={'cursor-pointer opacity-100 w-44 max-w-sm'} onClick={goToHome}>
				<Logo height={40} width={180}/>
			</div>
			<div className={'ml-10 justify-between flex md:flex-1'}>
				<nav className={'md:flex hidden items-center'}>
					<ul className={`flex items-center font-bold lg:flex text-gray-600 lg:text-lg text-xs`}>
						{ navItems.map(({ onClick, translationKey }) => <NavItem key={translationKey} onClick={onClick}>
							{ t(translationKey) }
						</NavItem>) }
					</ul>
				</nav>{ token ? <ConnectedComponent openPaymentModal={openPaymentModal}/> : <AuthButtons />  }
			</div>
		</div>
	)
}

export default Header
