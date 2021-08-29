import {FunctionComponent} from "react";

interface FieldSelectionSelectedItemCountProps {
    selectedFieldCount: number
}

const FieldSelectionSelectedItemCount: FunctionComponent<FieldSelectionSelectedItemCountProps> = ({ selectedFieldCount }) => {
	return <span>
		{ selectedFieldCount } Matières sélectionnés
	</span>
}

export default FieldSelectionSelectedItemCount
