import {FunctionComponent, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import CreditList from "@/modules/Payment/components/CreditList";
import {Elements} from "@stripe/react-stripe-js";
import PaymentMethodCard from "@/modules/Payment/components/PaymentMethodCard";
import {loadStripe} from "@stripe/stripe-js";

interface PaymentModalProps {
    open: boolean;
    handleClose: () => void
}

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);

const PaymentModal: FunctionComponent<PaymentModalProps> = ({ open, handleClose }) => {
	const [creditsChosen, setCreditsChosen] = useState(20);

	const onCreditChange = (credit: number) => {
		setCreditsChosen(credit)
	}

	return <Modal open={open} handleClose={handleClose}>
		<div className={'flex justify-center md:p-10 bg-gray-100 h-full'}>
			<div className="flex flex-col">
				<TailwindCard className={"px-4 pb-3 mb-5 h-min"}>
					<h1 className={"text-gray-600 text-xl m-5"}>Combien de crédits souhaitez vous ?</h1>
					<CreditList
						creditsChosen={creditsChosen}
						onCreditChange={onCreditChange}
					/>
				</TailwindCard>
				<Elements stripe={stripePromise}>
					<PaymentMethodCard
						creditsChosen={creditsChosen}
					/>
				</Elements>
			</div>
		</div>
	</Modal>
}

export default PaymentModal
