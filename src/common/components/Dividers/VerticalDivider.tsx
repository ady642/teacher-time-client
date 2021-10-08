import {FunctionComponent} from "react";
import {Divider} from "@material-ui/core";

interface VerticalDividerProps {
    className?: string;
}

const VerticalDivider: FunctionComponent<VerticalDividerProps> = ({ className = '' }) => {
	return <Divider
		className={'flex justify-center items-center mx-6'}
		orientation="vertical" variant="middle" flexItem
	/>


}

export default VerticalDivider
