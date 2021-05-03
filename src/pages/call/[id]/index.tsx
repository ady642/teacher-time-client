import {FC, useState} from "react";
// @ts-ignore
import io from 'socket.io-client';
import {useRouter} from "next/router";
import BoardContainer from "@/modules/Call/Whiteboard/BoardContainer";

const Call: FC = () => {
	const router = useRouter()
	const { id } = router.query
	const [socket] = useState(io(process.env.SOCKET_SERVER))

	return <div>
		<BoardContainer
			socket={socket}
		/>
	</div>
}

export default Call
