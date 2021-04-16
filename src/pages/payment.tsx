import {FunctionComponent, useState} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import CreditList from "@/modules/Payment/components/CreditList";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import PaymentMethodCard from "@/modules/Payment/components/PaymentMethodCard";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);

const Payment: FunctionComponent = () => {
    const [creditCardModalOpened, setCreditCardModalOpened] = useState(false);
    const [creditsChosen, setCreditsChosen] = useState(20);

    const openCreditCardModal = () => {
        setCreditCardModalOpened(true);
    };

    const closeCreditCardModal = () => {
        setCreditCardModalOpened(false);
    };

    const onCreditChange = (credit: number) => {
        setCreditsChosen(credit)
    }

    return <div className={'flex justify-center md:p-10 bg-gray-100 h-full'}>
        <div className="flex flex-wrap flex-col sm:flex-row md:w-4/5">
            <div className={'mr-3 sm:flex-1 sm:w-1/2'}>
                <TailwindCard>
                    <h1 className={"text-gray-600 text-xl m-5"}>Combien de crédits Planete Elève souhaitez-vous acheter ?</h1>
                    <CreditList
                        creditsChosen={creditsChosen}
                        onCreditChange={onCreditChange}
                    />
                </TailwindCard>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentMethodCard
                        handlePaymentItemClick={openCreditCardModal}
                        creditsChosen={creditsChosen}
                    />
                </Elements>
            </div>
        </div>
    </div>
}

(Payment as PageWithLayoutType).layout = DefaultLayout

export default Payment
