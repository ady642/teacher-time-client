import React, {FC} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";

import NavItem from "@/common/components/Headers/NavItem";

import LogoTeacherTime from '@/modules/home/components/LogoTeacherTime';

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
		<div style={{height: '8.5vh'}} className={'w-auto flex items-center   p-1 px-4 bg-white'}>
			<div style={{width:'14%'}} className={'cursor-pointer opacity-100'} onClick={goToHome}>
			<LogoTeacherTime/>
			</div>
			<div className={'flex ml-10 justify-between  flex-1'}>
				<nav style={{marginTop:'1vh'}} className={'flex items-center'}>
					<ul style={{marginLeft:'1.6vw', fontSize:'1.8vh'}} className={`flex items-center font-bold  lg:flex  ${dark ? 'text-white' : 'text-gray-600'}`}>
						{ navItems.map(({ onClick, translationKey }) => <NavItem margin={3} key={translationKey} onClick={onClick}>
							{ t(translationKey) }
						</NavItem>) }
					</ul>
				</nav>
				<button onClick={goToContact} style= {{marginTop:'0.5vw', fontSize:'2vh'}} className={`rounded-3xl transition bg-orange hover:bg-red-700 text-white font-bold   md:px-4 md:p-2 p-1`}>
					{ t('common.teachers') }
				</button>
			</div>
		</div>
	)
}

export default Header
