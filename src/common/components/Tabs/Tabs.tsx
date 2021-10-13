import {FunctionComponent} from "react";
import Tab from "@/common/components/Tabs/Tab";

export interface TabsProps {
	tabNames: string[];
	tabSelected: number;
	selectTab: (index: number) => void;
}

const Tabs: FunctionComponent<TabsProps> = ({ tabSelected, tabNames, selectTab }) => {
	return <div>
		{ tabNames.map((tabName, index) => <Tab
			key={tabName}
			name={tabName}
			active={tabSelected === index}
			onClick={() => selectTab(index)}
		/>)
		}
	</div>
}

export default Tabs
