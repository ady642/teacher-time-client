import {FunctionComponent} from "react";

interface FieldSelectionSelectedItemCountProps {
    selectedFieldCount: number
}

const SelectedItemCount: FunctionComponent<FieldSelectionSelectedItemCountProps> = ({ selectedFieldCount }) => {
	return <span>
		{ selectedFieldCount } Matières sélectionnés
	</span>
}

export default SelectedItemCount
