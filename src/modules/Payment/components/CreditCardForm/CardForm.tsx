import React, {FC, useState} from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Field from "@/modules/Payment/components/CreditCardForm/InfoField";
import CardField from "@/modules/Payment/components/CreditCardForm/CardField";
import SubmitButton from "@/modules/Payment/components/CreditCardForm/SubmitButton";
import ErrorMessage from "@/modules/Payment/components/CreditCardForm/ErrorMessage";
import SuccessPaymentCard from "@/modules/Payment/components/CreditCardForm/SuccessPaymentCard";
import usePaymentClient from "@/modules/Payment/services/PaymentClient";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

interface CardFormProps {
    creditsChosen: number
}

const CardForm: FC<CardFormProps> = ({ creditsChosen }) => {
	const stripe = useStripe();
	const { token, user } = useAuthGetters();
	const elements = useElements();
	const { paymentIntent, addCredits } = usePaymentClient()

	const [error, setError] = useState(null);
	const [cardComplete, setCardComplete] = useState(false);
	const [processing, setProcessing] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState(null);
	const [billingDetails, setBillingDetails] = useState({
		name: ""
	});

	const pay = async (event: { preventDefault: () => void; }) => {
		event.preventDefault();

		if(!token) {
			throw new Error('token not defined')
		}

		try {
			if (!stripe || !elements) {
				return;
			}

			if (error) {
				elements.getElement("card").focus();
				return;
			}

			if (cardComplete) {
				setProcessing(true);
			}

			// Get client secret
			const clientSecret = await paymentIntent({
				email: user.email,
				amount: creditsChosen * 100
			})

			// Create Payment Method
			const paymentMethodRequest = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement),
				billing_details: billingDetails
			});

			// Use payment method and client secret to pay
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: paymentMethodRequest.paymentMethod.id
			})

			// Add money on customer balance
			await addCredits({
				email: user.email,
				amount: creditsChosen * 100
			})

			if (paymentMethodRequest.error) {
				setError(paymentMethodRequest.error);
			} else {
				setPaymentMethod(paymentMethodRequest.paymentMethod);
			}
		} catch (e) {
			alert('Payment error, please contact support at support@teacher-time.com')
		} finally {
			setProcessing(false);
		}
	};

	const reset = () => {
		setError(null);
		setProcessing(false);
		setPaymentMethod(null);
		setBillingDetails({
			name: ""
		});
	};

	return paymentMethod ? <SuccessPaymentCard
		creditsChoosen={creditsChosen}
		reset={reset}
	/> : <form className="Form" onSubmit={pay}>
		<fieldset className="FormGroup">
			<Field
				label="Nom"
				id="name"
				type="text"
				placeholder="Proust"
				required
				autoComplete="name"
				value={billingDetails.name}
				onChange={(e: any) => {
					setBillingDetails({ ...billingDetails, name: e.target.value });
				}}
			/>
		</fieldset>
		<fieldset className="FormGroup">
			<CardField
				onChange={(e) => {
					setError(e.error);
					setCardComplete(e.complete);
				}}
			/>
		</fieldset>
		{error && <ErrorMessage>{error.message}</ErrorMessage>}
		<SubmitButton processing={processing} error={error} disabled={!stripe}>
                Buy {creditsChosen}€ credits
		</SubmitButton>
	</form>
};
export default CardForm
