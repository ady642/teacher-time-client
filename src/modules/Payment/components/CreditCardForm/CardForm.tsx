import React, {FC, useState} from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Field from "@/modules/Payment/components/CreditCardForm/InfoField";
import CardField from "@/modules/Payment/components/CreditCardForm/CardField";
import SubmitButton from "@/modules/Payment/components/CreditCardForm/SubmitButton";
import ErrorMessage from "@/modules/Payment/components/CreditCardForm/ErrorMessage";
import SuccessPaymentCard from "@/modules/Payment/components/CreditCardForm/SuccessPaymentCard";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import PaymentClient from "@/modules/Payment/services/PaymentClient";
import usePaymentReducers from "@/context/payment/helpers/usePaymentReducers";
import usePaymentGetters from "@/context/payment/helpers/usePaymentGetters";

interface CardFormProps {
    creditsChosen: number,
	error: { message: string },
	setError: (error: any) => void

}

const CardForm: FC<CardFormProps> = ({ creditsChosen, error, setError }) => {
	const stripe = useStripe();
	const { token } = useAuthGetters();
	const elements = useElements();
	const paymentClient = new PaymentClient(token)
	const {setBalance} = usePaymentReducers()
	const { balance } = usePaymentGetters()

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
			const clientSecret = await paymentClient.paymentIntent(creditsChosen * 100)

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
			await paymentClient.addCredits(creditsChosen * 100)

			//Set Balance
			setBalance(balance + (creditsChosen * 100))
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
				id="name"
				type="text"
				placeholder="Nom sur la carte"
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
                Acheter {creditsChosen}€ crédits
		</SubmitButton>
	</form>
};
export default CardForm
