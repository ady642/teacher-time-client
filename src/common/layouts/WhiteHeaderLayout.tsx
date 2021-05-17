import {ReactNode, FC} from 'react'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import WhiteHeader from "@/common/components/Headers/WhiteHeader";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";

type LayoutProps = {
    children: ReactNode;
    locale: string
}

const WhiteHeaderLayout: FC<LayoutProps> = ({ children, locale }) => {
	const { appLoading } = useAppGetters()
	const { setAppLoading } = useAppReducers()

	return (
		<>
			<WhiteHeader locale={locale} />
			<div className={'h-5/6 relative'}>
				{children}
			</div>
			<BottomBar locale={locale} />
			<LoadingModal open={appLoading} handleClose={() => setAppLoading(false)} />
		</>
	)
}

export default WhiteHeaderLayout
