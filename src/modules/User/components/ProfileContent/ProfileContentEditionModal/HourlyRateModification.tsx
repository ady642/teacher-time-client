import React, {FunctionComponent, useState} from "react";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import HourlyRateInputIntegration
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/HourlyRate/HourlyRateInputIntegration";

interface HourlyRateModificationProps {
	modifyHourlyRate: (hourlyRatePayload: { hourlyRate: number }) => void;
	submitStatus: string;
	hourlyRateInit: number
}

const HourlyRateModification: FunctionComponent<HourlyRateModificationProps> = ({
	hourlyRateInit, submitStatus, modifyHourlyRate }) => {
	const [hourlyRate, setHourlyRate] = useState(hourlyRateInit)

	return <div className={'flex flex-col'}>
		<HourlyRateInputIntegration
			hourlyRate={hourlyRate}
			setHourlyRate={setHourlyRate}
		/>
		<SubmitButton
			submitStatus={submitStatus}
			className="w-full mt-5"
			onClick={() => modifyHourlyRate({ hourlyRate })}
			label={'Modifier le taux horaire'}
		/>
	</div>
}

export default HourlyRateModification
