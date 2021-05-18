import {FunctionComponent, useRef} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.css'

const BoardContainer: FunctionComponent = () => {
	const boardContainerRef = useRef<HTMLDivElement>(null)

	return <div ref={boardContainerRef} className={styles.shade}>
		<Board boardContainerRef={boardContainerRef}/>
	</div>
}

export default BoardContainer
