import React, {FC, useState} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";

import NavItem from "@/common/components/Headers/NavItem";

import Logo from "@/common/components/Logos/Logo";
import AuthButtons from "@/modules/Auth/components/Buttons/AuthButtons";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import dynamic from "next/dynamic";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import AvailableSwitch, { AvailableSwitchProps } from "@/modules/Teachers/List/components/AvailableSwitch";

const ConnectedComponent = dynamic(() => import('@/common/components/Headers/ConnectedComponent'))

interface HeaderProps extends AvailableSwitchProps {
	locale: string;
	openAboutModal: () => void;
	openPaymentModal: () => void;
	dark?: boolean;
}

const WhiteHeader: FC<HeaderProps> = ({ locale, openAboutModal, openPaymentModal}) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()
	const { token } = useAuthGetters()
	const { teacher } = useUserGetters()

	const [navItems] = useState([
		{
			onClick: () => goToTeachers(),
			translationKey: 'common.findAteacher'
		}
	])

	const goToTeachers = async () => {
		await goTo(locale, 'teachers/list')
	}

	const goToCreationTeacher = async () => {
		await goTo(locale, 'teachers/create')
	}

	const goToHome = async () => {
		await goTo(locale, '/')
	}

	return (
		<div className={'flex items-center sm:px-16 sm:pt-6 sm:pb-3 p-2 justify-between'}>
			<div className={'cursor-pointer opacity-100 w-44 max-w-sm'} onClick={goToHome}>
				<Logo height={40} width={180}/>
			</div>
			<div className={'ml-10 justify-between flex md:flex-1'}>
				<nav className={'md:flex hidden items-center'}>
					<ul className={`flex items-center font-bold lg:flex text-gray-600 lg:text-lg text-xs`}>
						{ navItems.map(({ onClick, translationKey }) => <NavItem key={translationKey} onClick={onClick}>
							{ t(translationKey) }
						</NavItem>) }
						{ teacher ? <AvailableSwitch />:
							<NavItem onClick={goToCreationTeacher}>
								{ t('common.giveClasses') }
							</NavItem> }
					</ul>

				</nav>{ token ? <ConnectedComponent openPaymentModal={openPaymentModal}/> : <AuthButtons />  }
			</div>
		</div>
	)
}

export default WhiteHeader
