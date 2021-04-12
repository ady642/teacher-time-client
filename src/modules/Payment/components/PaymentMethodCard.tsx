import {FunctionComponent} from "react";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import Select from "@/common/components/Selects/Select";

interface PaymentMethodCardProps {
    handleCountryChange?: Function
}

const PaymentMethodCard: FunctionComponent<PaymentMethodCardProps> = ({ handleCountryChange = () => {} }) => {
    const countriesItems = [{
        value: 'France',
        label: 'France'
    }, {
        value: 'Spain',
        label: 'Spain'
    }]

    return <TailwindCard className={'mt-6'}>
        <div className={'flex w-full justify-between items-center'}>
            <div className={'flex'}>
                <h1 className={'text-black text-xl'}>Mode de paiement</h1>
                <span className={'text-gray-400 ml-4'}>Pays / Région de Facturation</span>
            </div>
            <Select value={'France'} handleChange={handleCountryChange} items={countriesItems} label={'Pays'} />
        </div>
    </TailwindCard>
}

export default PaymentMethodCard
