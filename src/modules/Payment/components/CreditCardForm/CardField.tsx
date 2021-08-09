import React from "react";
import {CardElement} from "@stripe/react-stripe-js";
import {StripeCardElementOptions} from "@stripe/stripe-js";

const iconStyle: ('default' | 'solid') = 'solid'

const CARD_OPTIONS: StripeCardElementOptions = {
	iconStyle,
	style: {
		base: {
			iconColor: "#479cf3",
			color: "#687B8C",
			fontWeight: 500,
			fontFamily: "Nunito, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": {
				color: "#687B8C"
			},
			"::placeholder": {
				color: "#687B8C"
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
