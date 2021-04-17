import {FunctionComponent, useState} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import CreditList from "@/modules/Payment/components/CreditList";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import PaymentMethodCard from "@/modules/Payment/components/PaymentMethodCard";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);

const Payment: FunctionComponent = () => {
    const [creditsChosen, setCreditsChosen] = useState(20);

    const onCreditChange = (credit: number) => {
        setCreditsChosen(credit)
    }

    return <div className={'flex justify-center md:p-10 bg-gray-100 h-full'}>
        <div className="flex flex-col">
                <TailwindCard className={"px-4 pb-3 mb-5 h-min"}>
                    <h1 className={"text-gray-600 text-xl m-5"}>Combien de crédits Planete Elève souhaitez-vous acheter ?</h1>
                    <CreditList
                        creditsChosen={creditsChosen}
                        onCreditChange={onCreditChange}
                    />
                </TailwindCard>
                <Elements stripe={stripePromise}>
                    <PaymentMethodCard
                        creditsChosen={creditsChosen}
                    />
                </Elements>
        </div>
    </div>
}

(Payment as PageWithLayoutType).layout = DefaultLayout

export default Payment
