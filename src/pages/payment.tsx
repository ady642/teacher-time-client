import {FunctionComponent, useState} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import CreditList from "@/modules/Payment/components/CreditList";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import PaymentMethodCard from "@/modules/Payment/components/PaymentMethodCard";
import CreditCardModal from "@/modules/Payment/components/CreditCardModal";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment: FunctionComponent = () => {
    const [creditCardModalOpened, setCreditCardModalOpened] = useState(false);

    const openCreditCardModal = () => {
        setCreditCardModalOpened(true);
    };

    const closeCreditCardModal = () => {
        setCreditCardModalOpened(false);
    };

    return <div className={'flex justify-center bg-gray-100 h-full'}>
        <div className="flex flex-col mt-10 w-3/5">
            <TailwindCard>
                <h1 className={"text-gray-600 text-2xl my-5"}>Combien de crédits Planete Elève souhaitez-vous acheter ?</h1>
                <CreditList/>
            </TailwindCard>
            <PaymentMethodCard handlePaymentItemClick={openCreditCardModal}/>
            <Elements stripe={stripePromise}>
                <CreditCardModal creditCardModalOpened={creditCardModalOpened} handleCloseModal={closeCreditCardModal}/>
            </Elements>
        </div>
    </div>
}

(Payment as PageWithLayoutType).layout = DefaultLayout

export default Payment
