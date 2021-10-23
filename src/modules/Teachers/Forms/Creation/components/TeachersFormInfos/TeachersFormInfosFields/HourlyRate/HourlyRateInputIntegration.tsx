import {FunctionComponent} from "react";
import TTInput from "@/common/components/Inputs/TTInput";
import {Euro} from "@material-ui/icons";

interface HourlyRateInputIntegrationProps {
    hourlyRate: number;
    setHourlyRate: (hourlyRate: number) => void;
}

const HourlyRateInputIntegration: FunctionComponent<HourlyRateInputIntegrationProps> = ({ hourlyRate, setHourlyRate }) => {
	return <TTInput
		type={'number'}
		value={hourlyRate}
		setValue={setHourlyRate}
		appendIcon={<Euro color={'primary'} fontSize={'small'}/>}
	/>
}

export default HourlyRateInputIntegration
