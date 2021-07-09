import {FunctionComponent} from "react";

interface ChipFilterProps {
    onClick: () => void;
    active: boolean;
    label: string;
    className?: string;
}

const ChipFilter: FunctionComponent<ChipFilterProps> = ({onClick, className= '', children }) => {
	return <div onClick={() => onClick()} className={`rounded-3xl cursor-pointer flex-1 bg-white border border-solid border-orange px-2 py-1 flex justify-center items-center font-bold text-orange ${className}`}>
		{ children }
	</div>
}

export default ChipFilter
