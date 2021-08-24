import {FunctionComponent} from "react";
import CreditsNumber from "@/modules/Payment/components/RightColumn/CreditsNumber";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import UserProfileDropdown from "@/modules/User/components/UserProfileDropdown/UserProfileDropdown";

interface ConnectedComponentProps {
	openPaymentModal: () => void
}

const ConnectedComponent: FunctionComponent<ConnectedComponentProps> = ({ openPaymentModal }) => <div className={"flex items-center"}>
	<CreditsNumber credits={2000}/>
	<TailwindButton onClick={openPaymentModal} className={'px-4 text-sm h-8 mx-3'}>
		<span className={'uppercase'}>Acheter des crédits</span>
	</TailwindButton>
	<UserProfileDropdown firstName={'Adrien'} lastName={'Haik'} />
</div>


export default ConnectedComponent
