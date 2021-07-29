import {FunctionComponent} from "react";
import CreditsNumber from "@/modules/Payment/components/CreditsNumber";
import TailwindButton from "@/common/components/Buttons/TailwindButton";

interface ConnectedComponentProps {
	openPaymentModal: () => void
}

const ConnectedComponent: FunctionComponent<ConnectedComponentProps> = ({ openPaymentModal }) => <div className='flex'>
	<CreditsNumber credits={2000} />
	<TailwindButton onClick={openPaymentModal} className={'px-4'}>
		<span>Acheter des crédits</span>
	</TailwindButton>
</div>


export default ConnectedComponent
