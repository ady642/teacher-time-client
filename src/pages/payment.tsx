import {FunctionComponent} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import CreditList from "@/modules/Payment/components/CreditList";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import PaymentMethodCard from "@/modules/Payment/components/PaymentMethodCard";

const Payment: FunctionComponent = () => {
    return <div className={'flex justify-center bg-gray-100 h-full'}>
        <div className="flex flex-col mt-10">
            <TailwindCard>
                <h1 className={"text-gray-600 text-2xl my-5"}>Combien de crédits Planete Elève souhaitez-vous acheter ?</h1>
                <CreditList/>
            </TailwindCard>
            <PaymentMethodCard />
        </div>
    </div>
}

(Payment as PageWithLayoutType).layout = DefaultLayout

export default Payment
