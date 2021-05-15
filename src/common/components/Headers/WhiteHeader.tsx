import React, {FC} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import LogoText from "@/common/components/Logos/LogoText";
import useRoutePush from "@/common/hooks/useRoutePush";

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
		<div className={'flex items-center header h-1/6 p-14	'}>
			<div className={'cursor-pointer'} onClick={goToHome}>
				<LogoText height={80} width={300}/>
			</div>
			<div className={'flex justify-between flex-1 mr-10'}>
				<nav className={'ml-16 flex items-center'}>
					<ul className={'flex items-center font-bold text-2xl tracking-wide text-gray-200'}>
						<li onClick={goToContact} className={'ml-10 cursor-pointer hover:text-green-300 transition'}>
							{ t('common.contactUs')}
						</li>
					</ul>
				</nav>
				<button onClick={goToContact} className={'text-green-500 border border-green-500 border-solid font-bold text-2xl p-5'}>
					{ t('common.teachers') }
				</button>
			</div>
		</div>
	)
}

export default Header
