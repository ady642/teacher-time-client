import React, {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";
import PaymentAvailableIcons from "@/modules/Payment/components/PaymentAvailableIcons";
import {Elements} from "@stripe/react-stripe-js";
import CardForm from "@/modules/Payment/components/CreditCardForm/CardForm";

interface PaymentFormProps {
    stripePromise: any,
	creditsChosen: number,
	error: any,
	setError: (error: any) => void
}

const PaymentForm: FunctionComponent<PaymentFormProps> = ({ stripePromise, creditsChosen, error, setError }) => {
	return <div className={styles['payment__credits-information__form']}>
		<h3 className={`${styles['payment__credits-information__title']} self-start mb-2`}>Informations de paiement</h3>
		<PaymentAvailableIcons />
		<Elements stripe={stripePromise}>
			<CardForm
				creditsChosen={creditsChosen}
				error={error}
				setError={setError}
			/>
		</Elements>
	</div>
}

export default PaymentForm
