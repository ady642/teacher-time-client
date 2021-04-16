import {FunctionComponent} from "react";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import CardForm from "@/modules/Payment/components/CreditCardForm/CardForm";

interface PaymentMethodCardProps {
    handleCountryChange?: Function
    handlePaymentItemClick: Function
    creditsChosen: number
}

const PaymentMethodCard: FunctionComponent<PaymentMethodCardProps> = ({ creditsChosen, handleCountryChange, handlePaymentItemClick = () => {} }) => {
    const countriesItems = [{
        value: 'France',
        label: 'France'
    }, {
        value: 'Spain',
        label: 'Spain'
    }]

    return <TailwindCard>
        <div className={'flex w-full justify-between items-center border-b-2 p-4'}>
            <div className={'flex items-center'}>
                <h1 className={'text-black text-xl'}>Mode de paiement</h1>
            </div>
        </div>
        <div className={'p-5'}>
            <CardForm creditsChosen={creditsChosen} />
        </div>
    </TailwindCard>
}

export default PaymentMethodCard
