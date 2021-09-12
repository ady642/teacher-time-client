import React, {ReactNode, FC, useState, useEffect} from 'react'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import WhiteHeader from "@/common/components/Headers/WhiteHeader";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";
import AboutModal from "@/common/components/Modals/AboutModal";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useRoutePush from "@/common/hooks/useRoutePush";

type LayoutProps = {
    children: ReactNode;
    locale: string;
    className?: string;
    dark?: boolean;
}

const WhiteHeaderLayout: FC<LayoutProps> = ({ children,dark = false, className, locale }) => {
	const { appLoading } = useAppGetters()
	const { setAppLoading } = useAppReducers()

	const [aboutModalOpened, setModalOpened] = useState(false)
	const [paymentModalOpened, setPaymentModalOpened] = useState(false)

	const { teacher } = useUserGetters()
	const { getTeacher } = useTeacherClient()

	useEffect(() => {
		const asyncGetTeacher = async () => {
			await getTeacher()
		}

		asyncGetTeacher()
	}, [])

	return (
		<div className={`${className}`}>
			<WhiteHeader
				dark={dark} locale={locale}
				openAboutModal={() => setModalOpened(true)}
				openPaymentModal={() => setPaymentModalOpened(true)}
			/>
			{children}
			<BottomBar locale={locale} />
			<LoadingModal open={appLoading} handleClose={() => setAppLoading(false)} />
			<AboutModal open={aboutModalOpened} handleClose={() => setModalOpened(false)} />
			<PaymentModal open={paymentModalOpened} handleClose={() => setPaymentModalOpened(false)} />
		</div>
	)
}

export default WhiteHeaderLayout
