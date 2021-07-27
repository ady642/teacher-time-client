import {FunctionComponent} from "react";
import CreditsNumber from "@/modules/Payment/components/CreditsNumber";
import SimpleButton from "@/common/components/Buttons/SimpleButton";

interface ConnectedComponentProps {
	openPaymentModal: () => void
}

const ConnectedComponent: FunctionComponent<ConnectedComponentProps> = ({ openPaymentModal }) => {
	return <div>
		<CreditsNumber credits={2000} />
		<SimpleButton size={'small'} onClick={openPaymentModal} text={'Buy Credits'}/>
	</div>
}

export default ConnectedComponent
