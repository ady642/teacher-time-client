import {FunctionComponent} from "react";

export interface FieldSelectionItemProps {
    active: boolean;
    label: string;
    icon: any;
    onClick: () => void
}

const FieldSelectionItem: FunctionComponent<FieldSelectionItemProps> = ({ label, active, onClick }) => {
	return <li onClick={onClick}>
		{ label }
	</li>
}

export default FieldSelectionItem
