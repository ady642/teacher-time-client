import {FunctionComponent} from "react";
import CreditsNumber from "@/modules/Payment/components/RightColumn/CreditsNumber";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import UserProfileButton from "@/common/components/Headers/UserProfileButton";

interface ConnectedComponentProps {
	openPaymentModal: () => void
}

const ConnectedComponent: FunctionComponent<ConnectedComponentProps> = ({ openPaymentModal }) => <>
	<button onClick={openPaymentModal} className={'px-4 rounded-md transition-all bg-bluegreen hover:shadow-lg text-white font-bold '}>
		<span>Acheter des crédits</span>
	</button>
	<UserProfileButton />
</>


export default ConnectedComponent
