import {FunctionComponent} from "react";
import SquareListItem from "@/modules/Payment/components/LeftColumns/Square/SquareListItem";

interface SquareListProps {
 texts: string[]
}

const SquareList: FunctionComponent<SquareListProps> = ({ texts }) => {
	return <div>
		{ texts.map((text) => <SquareListItem key={text} text={text}/>) }
	</div>
}

export default SquareList
