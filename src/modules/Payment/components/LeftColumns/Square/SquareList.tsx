import {FunctionComponent} from "react";
import SquareListItem from "@/modules/Payment/components/LeftColumns/Square/SquareListItem";

interface SquareListProps {

}

const SquareList: FunctionComponent<SquareListProps> = () => {
	return <div>
		<SquareListItem />
		<SquareListItem />
		<SquareListItem />
	</div>
}

export default SquareList
