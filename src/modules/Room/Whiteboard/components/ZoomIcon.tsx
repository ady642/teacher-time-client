import {FunctionComponent} from "react";
import Image from "next/image";
import {Add, Minimize} from "@material-ui/icons";
import { Switch, Case } from 'react-switch-case-module';

interface ZoomIconProps {
	zoomIn?: boolean;
	className?: string
}

const ZoomIcon: FunctionComponent<ZoomIconProps> = ({ zoomIn = true, className= '' }) => {
	return 	<div className={`relative flex justify-center items-center ${className}`}>
		<Switch
			componentName={zoomIn ? 'Add' : 'Minimize'}
			defaultComponent={<Add />}
		>
			<Case value={'Add'}>
				<button>
					<Image src='/img/icon/plus.png' width={32} height={32} alt={'zoom in'}/>
				</button>
			</Case>
			<Case value={'Minimize'}>
				<button>
					<Image src='/img/icon/minus.png' width={32} height={32} alt={'zoom out'}/>
				</button>
			</Case>
		</Switch>
	</div>
}

export default ZoomIcon
