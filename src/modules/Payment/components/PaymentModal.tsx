import React, {FunctionComponent, useState} from "react";
import Modal from "@/common/components/Modals/Modal";
import {loadStripe} from "@stripe/stripe-js";
import Logo from "@/common/components/Logos/Logo";
import styles from '@/modules/Payment/components/payment.module.scss'
import Titles from "@/modules/Payment/components/LeftColumns/Titles";
import Square from "@/modules/Payment/components/LeftColumns/Square/Square";
import CreditList from "@/modules/Payment/components/RightColumn/CreditList";
import CardForm from "@/modules/Payment/components/CreditCardForm/CardForm";
import {Elements} from "@stripe/react-stripe-js";
import PaymentAvailableIcons from "@/modules/Payment/components/PaymentAvailableIcons";
import Details from "@/modules/Payment/components/LeftColumns/Details";

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

	return <Modal fullScreen className={'p-10'} open={open} handleClose={handleClose}>
		<div className={'flex justify-between md:p-16 bg-white h-full'}>
			<div className={styles['payment__aside-information']}>
				<Logo height={50} width={220} />
				<Titles />
				<Square />
				<Details />
 			</div>
			<div className={styles['payment__credits-information']}>
				<h3 className={styles['payment__credits-information__title']}>Combien de crédits souhaitez-vous ?</h3>
				<CreditList creditsChosen={creditsChosen} onCreditChange={onCreditChange} />
				<div className={styles['payment__credits-information__form']}>
					<h3 className={`${styles['payment__credits-information__title']} self-start`}>Informations de paiement</h3>
					<PaymentAvailableIcons />
					<Elements stripe={stripePromise}>
						<CardForm creditsChosen={creditsChosen} />
					</Elements>
				</div>
			</div>
		</div>
	</Modal>
}

export default PaymentModal
