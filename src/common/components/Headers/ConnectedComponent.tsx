import {FunctionComponent} from "react";
import CreditsNumber from "@/modules/Payment/components/RightColumn/CreditsNumber";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import UserProfileButton from "@/common/components/Headers/UserProfileButton";

interface ConnectedComponentProps {
	openPaymentModal: () => void
}

const ConnectedComponent: FunctionComponent<ConnectedComponentProps> = ({ openPaymentModal }) => <div className={"flex"}>
	<CreditsNumber credits={2000}/>
	<TailwindButton onClick={openPaymentModal} className={'px-4'}>
		<span>Acheter des crédits</span>
	</TailwindButton>
	<UserProfileButton />
</div>


export default ConnectedComponent
