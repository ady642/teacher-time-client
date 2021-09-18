import React, {ReactNode, FC, useState, useEffect, useRef} from 'react'
import BottomBar from "@/common/components/BottomNavigation/BottomNavigation";
import WhiteHeader from "@/common/components/Headers/WhiteHeader";
import useAppGetters from "@/context/app/helpers/useAppGetters";
import useAppReducers from "@/context/app/helpers/useAppReducers";
import LoadingModal from "@/common/components/Modals/LoadingModal";
import AboutModal from "@/common/components/Modals/AboutModal";
import PaymentModal from "@/modules/Payment/components/PaymentModal";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import {socket} from "@/common/utils/client";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import {v4} from "uuid";
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
	const { goTo } = useRoutePush()

	const [studentID, setStudentID] = useState('')
	const llamadaRef = useRef<HTMLAudioElement>(null)
	const [displayAcceptModal, setDisplayAcceptModal] = useState(false)

	const [aboutModalOpened, setModalOpened] = useState(false)
	const [paymentModalOpened, setPaymentModalOpened] = useState(false)
	const [roomID, setRoomID] = useState<string>(null)

	const { teacher } = useUserGetters()
	const { getTeacher } = useTeacherClient()
	const { token, user} = useAuthGetters()

	useEffect(() => {
		const asyncGetTeacher = async () => {
			await getTeacher()
		}

		if(!teacher && token && user._id)
			asyncGetTeacher()
	}, [token, user?._id])

	const beep = async () => {
		if(!llamadaRef.current)
			return

		llamadaRef.current.src = '/sound/tonoDeLlamada.mp3';
		await llamadaRef.current.play()
	}

	const createRoom = () => {
		const uuid = v4()
		setRoomID(uuid)
		socket.emit('create-room', uuid)
	}

	const deleteRoom = () => {
		socket.emit('delete-room', roomID)
	}

	const joinIntent = async (id: string) => {
		setStudentID(id)
		setDisplayAcceptModal(true)
		await beep()
	}

	const closeModalAcceptation = async () => {
		setDisplayAcceptModal(false)
	}

	const acceptStudent = async () => {
		await llamadaRef.current.pause()
		await goTo('fr', `room/${roomID}`)
		socket.emit('accept-student', { studentID, roomID: roomID })
	}

	const rejectStudent = async () => {
		await llamadaRef.current.pause()
		socket.emit('reject-student', studentID)
		setStudentID('')
		setDisplayAcceptModal(false)
	}

	useEffect(() => {
		socket.on('on-join-intent', joinIntent)
		socket.on('on-student-already-accepted', closeModalAcceptation)
		socket.on('on-room-created', async (roomID: string) => {
			console.log(roomID)
		})
	}, [])

	return (
		<div className={`${className}`}>
			<WhiteHeader
				dark={dark} locale={locale}
				openAboutModal={() => setModalOpened(true)}
				openPaymentModal={() => setPaymentModalOpened(true)}
				createRoom={createRoom}
				deleteRoom={deleteRoom}
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
