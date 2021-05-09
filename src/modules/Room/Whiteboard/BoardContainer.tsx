import {FunctionComponent, useRef, useState} from "react";
import Board from "@/modules/Room/Whiteboard/Board";
import styles from './style.module.css'
import ChalkParams from "@/modules/Room/Whiteboard/types/ChalkParams";

const BoardContainer: FunctionComponent = () => {
	const boardContainerRef = useRef<HTMLDivElement>(null)
	const [chalkParams, setChalkParams] = useState<ChalkParams>({ color: 'white', x: 0, y: 0})

	return <div ref={boardContainerRef} className={styles.shade}>
		<Board
			boardContainerRef={boardContainerRef}
			chalkParams={chalkParams}
			setChalkParams={setChalkParams}
		/>
	</div>
}

export default BoardContainer
