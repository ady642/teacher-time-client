import React, {FC, useState} from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Field from "@/modules/Payment/components/CreditCardForm/InfoField";
import CardField from "@/modules/Payment/components/CreditCardForm/CardField";
import SubmitButton from "@/modules/Payment/components/CreditCardForm/SubmitButton";
import ErrorMessage from "@/modules/Payment/components/CreditCardForm/ErrorMessage";
import ResetButton from "@/modules/Payment/components/CreditCardForm/ResetButton";
import axios from 'axios'

interface CardFormProps {
    creditsChosen: number
}

const CardForm: FC<CardFormProps> = ({ creditsChosen }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        name: ""
    });

    const pay = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

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

            const {data: clientSecret} = await axios.post("/api/payment/payment_intents", {
                amount: creditsChosen * 100
            });

            const paymentMethodRequest = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
                billing_details: billingDetails
            });

            const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodRequest.paymentMethod.id
            })

            console.log(confirmPayment)

            if (paymentMethodRequest.error) {
                setError(paymentMethodRequest.error);
            } else {
                setPaymentMethod(paymentMethodRequest.paymentMethod);
            }
        } catch (e) {
            alert('Erreur lié au paiement, veuillez contacter le support client')
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

    return paymentMethod ? (
        <div className="Result">
            <div className="ResultTitle" role="alert">
                Payment successful
            </div>
            <div className="ResultMessage">
                Thanks for trying Stripe Elements. No money was charged, but we
                generated a PaymentMethod: {paymentMethod.id}
            </div>
            <ResetButton onClick={reset} />
        </div>
    ) : (
        <form className="Form" onSubmit={pay}>
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
                Acheter {creditsChosen}€ Credits
            </SubmitButton>
        </form>
    );
};
export default CardForm
