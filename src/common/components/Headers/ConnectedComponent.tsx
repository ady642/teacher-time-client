import {FunctionComponent} from "react";
import CreditsNumber from "@/modules/Payment/components/RightColumn/CreditsNumber";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import UserProfileButton from "@/common/components/Headers/UserProfileButton";

interface ConnectedComponentProps {
	openPaymentModal: () => void
}

const ConnectedComponent: FunctionComponent<ConnectedComponentProps> = ({ openPaymentModal }) => <div className={"flex items-center"}>
	<CreditsNumber credits={2000}/>
	<TailwindButton onClick={openPaymentModal} className={'px-4 text-sm h-10 mx-3'}>
		<span className={'uppercase'}>Acheter des crédits</span>
	</TailwindButton>
	<UserProfileButton />
</div>


export default ConnectedComponent
