import {ReactNode, FC} from 'react'
import Header from '@/common/components/Headers/Header'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import {LoadingButton} from "@material-ui/lab";
import Modal from "@/common/components/Modals/Modal";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";

type LayoutProps = {
    children: ReactNode;
    locale: string
}

const Layout: FC<LayoutProps> = ({ children, locale }) => {
	const { appLoading } = useAppGetters()
	const { setAppLoading } = useAppReducers()

	return (
		<>
			<Header locale={locale} />
			<div className='relative h-full w-full'>
				{children}
			</div>
			<BottomBar locale={locale} />
			<LoadingModal open={appLoading} handleClose={() => setAppLoading(false)} />
		</>
	)
}

export default Layout
