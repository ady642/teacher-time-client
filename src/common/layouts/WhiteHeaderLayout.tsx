import React, {ReactNode, FC, useState, useEffect} from 'react'
import WhiteHeader from "@/common/components/Headers/WhiteHeader";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import useRoomManagement from "@/modules/Room/hooks/useRoomManagement";
import {socket} from "@/common/utils/client";
import {Room} from "@/modules/Room/types";
import useRoomReducers from "@/context/room/helpers/useRoomReducers";
import Footer from "@/common/components/Footers/Footer";

type LayoutProps = {
    children: ReactNode;
    locale: string;
    className?: string;
    dark?: boolean;
}

const WhiteHeaderLayout: FC<LayoutProps> = ({ children,dark = false, className, locale }) => {
	const { appLoading } = useAppGetters()
	const { setAppLoading } = useAppReducers()

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
		//fetchBalance()
	}, [])

	return (
		<div className={`${className} flex-col flex justify-between h-full`}>
			<main>
				<WhiteHeader
					dark={dark} locale={locale}
					openPaymentModal={() => setPaymentModalOpened(true)}
				/>
				{children}
			</main>
			<Footer />
			{/*
			<BottomBar locale={locale} />
			*/}
			<LoadingModal open={appLoading} handleClose={() => setAppLoading(false)} />
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
