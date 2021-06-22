import {FunctionComponent, useState} from "react";
import Image from "next/image";
import Tool from "@/modules/Room/Whiteboard/components/Toolbox/Tool";

interface WidthSelectionProps {
	setWidth: (width: number) => void;
	width: number;
}

const WidthSelectionContainer: FunctionComponent<WidthSelectionProps> = ({setWidth, width}) => {
	const [widthListOpened, setListOpened] = useState(false)

	return <>
		<Tool onClick={() => setListOpened(!widthListOpened)}>
			<Image src="/img/three-dots.png" width='32' height='10' />
		</Tool>
		{ widthListOpened && (
		    <div>
				<Tool onClick={() => setWidth(2)}>
					<Image src="/img/dot.png" width='8' height='8' />
				</Tool>
				<Tool onClick={() => setWidth(5)}>
					<Image src="/img/dot.png" width='12' height='12' />
				</Tool>
				<Tool onClick={() => setWidth(10)}>
					<Image src="/img/dot.png" width='16' height='16' />
				</Tool>
			</div>
		)}
	</>
}

export default WidthSelectionContainer
