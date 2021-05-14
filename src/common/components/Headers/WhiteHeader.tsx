import React, {FC} from 'react'

import useTranslation from "@/common/hooks/useTranslation";
import Logo from "@/common/components/Logos/Logo";
import LogoText from "@/common/components/Logos/LogoText";

interface HeaderProps {
    locale: string
}

const Header: FC<HeaderProps> = ({ locale }) => {
	const { t } = useTranslation()

	return (
		<div className={'flex items-center h-1/6 p-14'}>
			<div className={''}>
				<LogoText height={80} width={300}/>
			</div>
			<div className={'flex justify-between flex-1 mr-10'}>
				<nav className={'ml-16 flex items-center'}>
					<ul className={'flex items-center font-bold text-2xl tracking-wide text-gray-500'}>
						<li className={'cursor-pointer'}>
							{ t('common.teachers')}
						</li>
						<li className={'ml-10 cursor-pointer'}>
							{ t('common.contactUs')}
						</li>
					</ul>
				</nav>
				<button className={'text-green-500 border border-green-500 border-solid font-bold text-2xl p-5'}>
					{ t('common.teachers') }
				</button>
			</div>
		</div>
	)
}

export default Header
