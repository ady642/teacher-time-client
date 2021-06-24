import {FunctionComponent, useState} from "react";
import Image from "next/image";
import Tool from "@/modules/Room/Whiteboard/components/Toolbox/Tool";

interface WidthSelectionProps {
	setWidth: (width: number) => void;
	width: number;
}

const WidthSelectionContainer: FunctionComponent<WidthSelectionProps> = ({setWidth, width}) => {
	const [widthListOpened, setListOpened] = useState(false)

	return <div className="relative">
		<Tool onClick={() => setListOpened(!widthListOpened)}>
			<Image src="/img/three-dots.png" width='32' height='10' />
		</Tool>
		<div className={`absolute flex bg-blueviolet transition rounded-lg inset-y-0 left-16 ${widthListOpened ? '' : 'hidden'}`}>
			<Tool active={width === 2} onClick={() => setWidth(2)} subtitle={'2 px'}>
				<Image src="/img/dot.png" width='8' height='8' />
			</Tool>
			<Tool active={width === 5} onClick={() => setWidth(5)} subtitle={'5 px'}>
				<Image src="/img/dot.png" width='12' height='12' />
			</Tool>
			<Tool active={width === 10} onClick={() => setWidth(10)} subtitle={'10 px'}>
				<Image src="/img/dot.png" width='16' height='16' />
			</Tool>
		</div>
	</div>
}

export default WidthSelectionContainer
