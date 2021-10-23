import React, {FunctionComponent, useState} from "react";
import SubmitButton from "@/modules/Auth/components/Buttons/SubmitButton";
import FirstNameInput from "@/modules/Auth/components/Inputs/FirstNameInput";
import LastNameInput from "@/modules/Auth/components/Inputs/LastNameInput";

interface HourlyRateModificationProps {
	modifyNames: (namesPayload: { firstName: string, lastName: string }) => void;
	submitStatus: string;
	initFirstName: string;
	initLastName: string
}

const HourlyRateModification: FunctionComponent<HourlyRateModificationProps> = ({
	initFirstName, initLastName, submitStatus, modifyNames }) => {
	const [firstName, setFirstName] = useState(initFirstName)
	const [lastName, setLastName] = useState(initLastName)

	return <div className={'flex flex-col'}>
		<FirstNameInput
			value={firstName}
			setValue={(newFirstName: string) => setFirstName(newFirstName)}
		/>
		<LastNameInput
			value={lastName}
			setValue={(newLastName: string) => setLastName(newLastName)}
		/>
		<SubmitButton
			submitStatus={submitStatus}
			className="self-end mt-5"
			onClick={() => modifyNames({ firstName, lastName })}
			label={'Modifier les noms'}
		/>
	</div>
}

export default HourlyRateModification
