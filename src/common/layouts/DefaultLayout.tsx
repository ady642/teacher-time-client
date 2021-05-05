import {ReactNode, FC} from 'react'
import Header from '@/common/components/Headers/Header'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='relative h-full w-full'>
				{children}
			</div>
			<BottomBar />
		</>
	)
}

export default Layout
