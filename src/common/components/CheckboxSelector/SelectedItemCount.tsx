import {FunctionComponent} from "react";

interface SelectedItemCountProps {
    selectedItemCount: number;
	itemType: string
}

const SelectedItemCount: FunctionComponent<SelectedItemCountProps> = ({ selectedItemCount, itemType }) => {
	return <span>
		{ selectedItemCount } {itemType} sélectionnés
	</span>
}

export default SelectedItemCount
