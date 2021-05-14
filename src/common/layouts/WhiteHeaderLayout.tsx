import {ReactNode, FC} from 'react'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import WhiteHeader from "@/common/components/Headers/WhiteHeader";

type LayoutProps = {
    children: ReactNode;
    locale: string
}

const WhiteHeaderLayout: FC<LayoutProps> = ({ children, locale }) => {
	return (
		<>
			<WhiteHeader locale={locale} />
			<div className={'h-5/6'}>
				{children}
			</div>
			<BottomBar locale={locale} />
		</>
	)
}

export default WhiteHeaderLayout
