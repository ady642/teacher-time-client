import {FunctionComponent, ReactFragment} from "react";
import {Tooltip as MTooltip} from "@material-ui/core";

interface TooltipProps {
    title: string | ReactFragment;
    text: string;
}

const Tooltip: FunctionComponent<TooltipProps> = ({ title, text }) => {
	return <MTooltip classes={{ tooltip:'text-base p-2' }} arrow className="cursor-pointer mx-1 underline text-blue-500" title={title}>
		<span>{ text }</span>
	</MTooltip>
}

export default Tooltip
