import {ReactNode, FC, useState} from 'react'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import WhiteHeader from "@/common/components/Headers/WhiteHeader";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";
import AboutModal from "@/common/components/Modals/AboutModal";

type LayoutProps = {
    children: ReactNode;
    locale: string
}

const WhiteHeaderLayout: FC<LayoutProps> = ({ children, locale }) => {
	const { appLoading } = useAppGetters()
	const { setAppLoading } = useAppReducers()

	const [aboutModalOpened, setModalOpened] = useState(false)

	return (
		<div className={'bg-home h-full'}>
			<WhiteHeader locale={locale} openAboutModal={() => setModalOpened(true)} />
			<div className={'h-5/6'}>
				{children}
			</div>
			<BottomBar locale={locale} />
			<LoadingModal open={appLoading} handleClose={() => setAppLoading(false)} />
			<AboutModal open={aboutModalOpened} handleClose={() => setModalOpened(false)} />
		</div>
	)
}

export default WhiteHeaderLayout
