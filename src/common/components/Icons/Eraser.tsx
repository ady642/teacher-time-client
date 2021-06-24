import {FunctionComponent} from "react";
import {Case, Switch} from "react-switch-case-module";

interface EraserProps {
	active: boolean;
}

const Eraser: FunctionComponent<EraserProps> = ({ active }) => {
	return <Switch componentName={active ? 'ActiveEraser': 'NormalEraser'} defaultComponent={<img src="/img/eraser.svg" alt="eraser" />}>
		<Case value={'NormalEraser'}>
			<img src="/img/icon/eraser.svg" alt="eraser" />
		</Case>
		<Case value={'ActiveEraser'}>
			<img src="/img/icon/eraser-active.svg" alt="eraser-active" />
		</Case>
	</Switch>
}

export default Eraser
