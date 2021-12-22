import {FunctionComponent} from "react";
import ChartGridLineY from "@/modules/Teachers/Dashboard/Content/Home/components/Incomes/Chart/ChartGridLineY";

interface ChartGridProps {

}

const ChartGrid: FunctionComponent<ChartGridProps> = () => {
	return <div>
		<ChartGridLineY
			value={100}
		/>
	</div>
}

export default ChartGrid
