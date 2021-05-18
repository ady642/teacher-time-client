import React, {FC} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import Logo from "@/common/components/Logos/Logo";

interface HeaderProps {
    locale: string
}

const Header: FC<HeaderProps> = ({ locale }) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToContact = async () => {
		await goTo(locale, 'contact')
	}

	const goToHome = async () => {
		await goTo(locale, '/')
	}

	return (
		<div className={'flex items-center bg-blue-700 h-1/6 p-14	'}>
			<div className={'cursor-pointer'} onClick={goToHome}>
				<Logo height={80} width={300}/>
			</div>
			<div className={'flex sm:flex hidden justify-between flex-1'}>
				<nav className={'ml-16 flex items-center'}>
					<ul className={'flex items-center font-bold sm:text-lg text-sm lg:flex hidden tracking-wide text-gray-400'}>
						<li onClick={goToContact} className={'cursor-pointer hover:text-green-500 transition'}>
							{ t('common.tutoring')}
						</li>
					</ul>
				</nav>
				<button onClick={goToContact} className={'text-green-500 border border-green-500 border-solid font-bold md:text-lg text-sm md:p-3 p-1'}>
					{ t('common.teachers') }
				</button>
			</div>
		</div>
	)
}

export default Header
