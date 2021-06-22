import {FunctionComponent} from "react";
import {Switch, Case} from "react-switch-case-module"

interface PencilProps {
	active: boolean;
}

const Pencil: FunctionComponent<PencilProps> = ({ active }) => <div>
	<Switch componentName={active ? 'ActivePen': 'NormalPen'} defaultComponent={<img src="/img/pen.png" alt="pen" />}>
		<Case value={'NormalPen'}>
			<img src="/img/pen.png" alt="pen" />
		</Case>
		<Case value={'ActivePen'}>
			<img src="/img/icon/pen-active.png" alt="pen-active" />
		</Case>
	</Switch>
</div>

export default Pencil
