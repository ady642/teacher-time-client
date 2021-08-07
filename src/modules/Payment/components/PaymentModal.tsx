import React, {FunctionComponent, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import {loadStripe} from "@stripe/stripe-js";
import Logo from "@/common/components/Logos/Logo";
import styles from '@/modules/Payment/components/payment.module.scss'
import Titles from "@/modules/Payment/components/LeftColumns/Titles";
import Square from "@/modules/Payment/components/LeftColumns/Square/Square";
import CreditList from "@/modules/Payment/components/RightColumn/CreditList";
import Details from "@/modules/Payment/components/LeftColumns/Details";
import PaymentForm from "@/modules/Payment/components/RightColumn/PaymentForm";
import TextIndicators from "@/modules/Payment/components/RightColumn/TextIndicators";

interface PaymentModalProps {
    open: boolean;
    handleClose: () => void
}

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);

const PaymentModal: FunctionComponent<PaymentModalProps> = ({ open, handleClose }) => {
	const [creditsChosen, setCreditsChosen] = useState(20);
	const [error, setError] = useState(null);

	const onCreditChange = (credit: number) => {
		setCreditsChosen(credit)
	}


	return <Modal fullScreen className={'py-10 px-20'} open={open} handleClose={handleClose}>
		<div className={'flex justify-between md:p-16 px-20 bg-white h-full'}>
			<div className={styles['payment__aside-information']}>
				<div className={'self-start'}>
					<Logo height={50} width={220} />
				</div>
				<Titles
					creditsChosen={creditsChosen}
				/>
				<Square
					creditsChosen={creditsChosen}
				/>
				<Details />
 			</div>
			<div className={styles['payment__credits-information']}>
				<h3 className={styles['payment__credits-information__title']}>Combien de crédits souhaitez-vous ?</h3>
				<CreditList creditsChosen={creditsChosen} onCreditChange={onCreditChange} />
				<PaymentForm
					stripePromise={stripePromise}
					creditsChosen={creditsChosen}
					error={error}
					setError={setError}
				/>
				<TextIndicators error={error} />
			</div>
		</div>
	</Modal>
}

export default PaymentModal
