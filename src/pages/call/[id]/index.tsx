import {FC} from "react";
import {useRouter} from "next/router";
import BoardContainer from "@/modules/Call/Whiteboard/BoardContainer";

const Call: FC = () => {
	const router = useRouter()
	const { id } = router.query

	return <div>
		<BoardContainer />
	</div>
}

export default Call
