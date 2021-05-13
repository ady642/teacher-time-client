import {ReactNode, FC} from 'react'
import Header from '@/common/components/Headers/Header'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";

type LayoutProps = {
    children: ReactNode;
    locale: string
}

const Layout: FC<LayoutProps> = ({ children, locale }) => {
	return (
		<>
			<Header locale={locale} />
			<div className='relative h-full w-full'>
				{children}
			</div>
			<BottomBar />
		</>
	)
}

export default Layout
