import {FunctionComponent} from "react";

interface ChipFilterProps {
    className?: string;
    children: any;
}

const ChipFilter: FunctionComponent<ChipFilterProps> = ({ className= '', children }) => {
	return <div className={`rounded-3xl flex-1 bg-white border border-solid border-orange px-2 py-1 flex justify-center items-center font-bold text-orange ${className}`}>
		{ children }
	</div>
}

export default ChipFilter
