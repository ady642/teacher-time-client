import React, {ReactNode, FC, useState, useEffect} from 'react'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import WhiteHeader from "@/common/components/Headers/WhiteHeader";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";
import AboutModal from "@/common/components/Modals/AboutModal";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import useRoomManagement from "@/modules/Room/hooks/useRoomManagement";
import {socket} from "@/common/utils/client";
import {Room} from "@/modules/Room/types";
import useRoomReducers from "@/context/room/helpers/useRoomReducers";

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

	const {
		acceptStudent, rejectStudent,
		displayAcceptModal, closeModalAcceptation,
		llamadaRef
	} = useRoomManagement()

	const { setRooms } = useRoomReducers()

	useEffect(() => {
		socket.on('on-get-rooms', (rooms: Room[]) => {
			setRooms(rooms)
		})
		socket.on('on-room-created', (rooms) => {
		})
		socket.on('on-room-deleted', (rooms) => {
		})

		//fetchBalance()
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
			<ModalAcceptation
				displayAcceptModal={displayAcceptModal}
				handleClose={closeModalAcceptation}
				acceptStudent={acceptStudent}
				rejectStudent={rejectStudent}
			/>
			<audio loop ref={llamadaRef} />
		</div>
	)
}

export default WhiteHeaderLayout
