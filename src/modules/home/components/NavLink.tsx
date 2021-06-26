import useTranslation from "@/common/hooks/useTranslation";
import useRoutePush from "@/common/hooks/useRoutePush";
import React, {FC} from 'react'
import NavItem from "@/common/components/Headers/NavItem";

interface NavLinkProps {
    locale: string;
    dark?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ locale, dark = false }) => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToTeachers = async () => {
		await goTo(locale, 'teachers')
	}

	const navItems = [
		{
			onClick: () => goToTeachers(),
			translationKey: 'common.findAteacher'
		}
	]

	return (
		<div className={'flex justify-between  flex-1'}>
			<nav style={{marginTop:'2vw'}} className={'flex items-center'}>
				<ul style={{fontSize:'1.5vw'}} className={`flex items-center font-bold  lg:flex  ${dark ? 'text-white' : 'text-blue-900'}`}>
					{ navItems.map(({ onClick, translationKey }) => <NavItem margin={0} key={translationKey} onClick={onClick}>
						{ t(translationKey) }
					</NavItem>) }
				</ul>
			</nav>
		</div>

	)
}

export default  NavLink
