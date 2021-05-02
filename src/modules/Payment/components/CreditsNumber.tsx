import {FunctionComponent} from "react";
import {EuroRounded} from "@material-ui/icons";

interface CreditsNumberProps {
    credits: number
}

const CreditsNumber: FunctionComponent<CreditsNumberProps> = ({ credits }) => {
	return <div className={'flex items-center border-white border py-1 px-3'}>
		{credits / 100}
		<EuroRounded fontSize={'small'}/>
	</div>
}

export default CreditsNumber
