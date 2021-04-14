import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Field from "@/modules/Payment/components/CreditCardForm/InfoField";
import CardField from "@/modules/Payment/components/CreditCardForm/CardField";
import SubmitButton from "@/modules/Payment/components/CreditCardForm/SubmitButton";
import ErrorMessage from "@/modules/Payment/components/CreditCardForm/ErrorMessage";
import ResetButton from "@/modules/Payment/components/CreditCardForm/ResetButton";
import CardFormModel from '@/modules/Payment/models/CardForm'

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IgF6PA7kWq6lI13CHCeFzRxBLVJYgvMhFvkXTZkoBCsp1LRj31oFohgwR8VoQsie8rsK3rkZ9vwALGwIWyzzJfv00DbuuXzLX");

const CardForm = ({ addCard = (card = new CardFormModel()) => {} }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [card, setCard] = useState(null)
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        name: ""
    });

    const pay = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement("card").focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: billingDetails
        });

        setProcessing(false);

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
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
        <form className="Form" onSubmit={() => addCard()}>
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
                Ajouter
            </SubmitButton>
        </form>
    );
};
export default CardForm
