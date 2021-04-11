import {FunctionComponent} from "react";
import PageWithLayoutType from "@/common/types/pageWithLayout";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import CreditList from "@/modules/Payment/components/CreditList";

const Payment: FunctionComponent = () => {
    return <div className={'flex justify-center'}>
        <div className="flex flex-col mt-10">
            <div className="py-4 px-8 flex flex-col items-center bg-white shadow-lg rounded-lg">
                <h1 className={"text-gray-600 text-2xl"}>Combien de crédits Planete Elève souhaitez-vous acheter ?</h1>
                <CreditList/>
            </div>
        </div>
    </div>
}

(Payment as PageWithLayoutType).layout = DefaultLayout

export default Payment
