import {FunctionComponent} from "react";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import Select from "@/common/components/Selects/Select";
import PaymentMethodList from "@/modules/Payment/components/PaymentMethodList";

interface PaymentMethodCardProps {
    handleCountryChange?: Function
    handlePaymentItemClick: Function
}

const PaymentMethodCard: FunctionComponent<PaymentMethodCardProps> = ({ handleCountryChange, handlePaymentItemClick = () => {} }) => {
    const countriesItems = [{
        value: 'France',
        label: 'France'
    }, {
        value: 'Spain',
        label: 'Spain'
    }]

    return <TailwindCard className={'mt-6'}>
        <div className={'flex w-full justify-between items-center border-b-2 p-4'}>
            <div className={'flex items-center'}>
                <h1 className={'text-black text-xl'}>Mode de paiement</h1>
                <span className={'text-gray-400 ml-4'}>Pays / Région de Facturation</span>
            </div>
            <Select value={'France'} handleChange={handleCountryChange} items={countriesItems} label={'Pays'} />
        </div>
        <PaymentMethodList handleItemClick={handlePaymentItemClick} />
    </TailwindCard>
}

export default PaymentMethodCard
