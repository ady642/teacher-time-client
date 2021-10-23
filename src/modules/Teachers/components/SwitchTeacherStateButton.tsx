import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import Discussion from "@/common/components/Icons/Discussion";
import useSwitchAvailable from "@/modules/Teachers/List/hooks/useSwitchAvailable";

interface SwitchTeacherStateButtonProps {

}

const SwitchTeacherStateButton: FunctionComponent<SwitchTeacherStateButtonProps> = () => {
	const { available, toggleAvailability } = useSwitchAvailable()

	return <TailwindButton className={'px-8 py-2 flex items-center mb-3'} onClick={() => toggleAvailability()}>
		<Discussion className={'mr-3'}/>
		<span className="flex-1 text-sm font-bold">
			{ available ? 'Apparaitre Hors ligne' : 'Apparaitre En ligne' }
		</span>
	</TailwindButton>
}

export default SwitchTeacherStateButton
