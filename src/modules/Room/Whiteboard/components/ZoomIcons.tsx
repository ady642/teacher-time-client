import {FunctionComponent} from "react";
import styles from './zoomIconsStyle.module.scss'
import ZoomIcon from "@/modules/Room/Whiteboard/components/ZoomIcon";

interface ZoomIconsProps {
	className?: string;
}

const ZoomIcons: FunctionComponent<ZoomIconsProps> = ({ className = '' }) => {
	return <div className={ `flex flex-col justify-between rounded-3xl bg-white h-36 w-14 p-2 relative ${className} ${styles.container}` }>
		<div className={'flex flex-1 justify-center items-center'}>
			<ZoomIcon />
		</div>
		<div className={'border border-solid'}/>
		<div className={'flex flex-1 mt-2 justify-center items-center'}>
			<ZoomIcon zoomIn={false}/>
		</div>
	</div>
}

export default ZoomIcons
