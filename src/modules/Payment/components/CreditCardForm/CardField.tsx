import React from "react";
import {CardElement} from "@stripe/react-stripe-js";

const iconStyle: ('default' | 'solid') = 'solid'

const CARD_OPTIONS = {
    iconStyle,
    style: {
        base: {
            iconColor: "#479cf3",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#c2ab37"
            },
            "::placeholder": {
                color: "#808080"
            }
        },
        invalid: {
            iconColor: "#ec59c3",
            color: "#e547cc"
        }
    },
    hidePostalCode: true
};

const CardField = ({ onChange = (e: any) => {} }) => (
    <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
);

export default CardField
