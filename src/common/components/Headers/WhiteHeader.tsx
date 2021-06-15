import React, {FC} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import Logo from "@/common/components/Logos/Logo";
import NavItem from "@/common/components/Headers/NavItem";

interface HeaderProps {
    locale: string;
    openAboutModal: () => void;
    dark?: boolean;
}

const Header: FC<HeaderProps> = ({ locale, openAboutModal, dark = false }) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToTeachers = async () => {
		await goTo(locale, 'teachers')
	}

	const goToContact = async () => {
		await goTo(locale, 'contact')
	}

	const goToHome = async () => {
		await goTo(locale, '/')
	}

	const goToAbout = async () => {
		await goTo(locale, 'about')
	}

	const goToGiveClasses = async () => {
		await goTo(locale, 'give_classes')
	}

	const navItems = [
		{
			onClick: () => goToTeachers(),
			translationKey: 'common.findAteacher'
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
		<div className={'flex items-center sm:px-6 sm:py-3 p-1 bg-white'}>
			<div className={'cursor-pointer opacity-100'} onClick={goToHome}>
				<Logo height={50} width={200}/>
			</div>
			<div className={'sm:flex ml-10 justify-between hidden flex-1'}>
				<nav className={'flex items-center'}>
					<ul className={`flex items-center font-bold sm:text-base text-sm lg:flex hidden ${dark ? 'text-white' : 'text-gray-600'}`}>
						{ navItems.map(({ onClick, translationKey }) => <NavItem key={translationKey} onClick={onClick}>
							{ t(translationKey) }
						</NavItem>) }
					</ul>
				</nav>
				<button onClick={goToContact} className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white font-bold md:text-lg text-sm md:px-4 md:p-2 p-1`}>
					{ t('common.teachers') }
				</button>
			</div>
		</div>
	)
}

export default Header
