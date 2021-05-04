import {FunctionComponent} from "react";
import Board from "@/modules/Call/Whiteboard/Board";
import styles from './style.module.css'

interface ContainerProps {
	socket: any
}

const BoardContainer: FunctionComponent<ContainerProps> = ({ socket }) => {
	return <div className={styles.whiteboardContainer}>
		<div className={styles.colorPickerContainer}>
			<input type='color' />
		</div>

		<Board
			socket={socket}
		/>
	</div>
}

export default BoardContainer
