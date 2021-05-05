import {FunctionComponent} from "react";
import Board from "@/modules/Call/Whiteboard/Board";
import styles from './style.module.css'

interface ContainerProps {
	socket: any
}

const BoardContainer: FunctionComponent<ContainerProps> = ({ socket }) => {
	return <div className={styles.whiteboardContainer}>
		<div className={styles.shade}>
			<Board
				socket={socket}
			/>
		</div>
	</div>
}

export default BoardContainer
