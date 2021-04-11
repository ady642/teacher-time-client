import {FunctionComponent} from "react";
import CreditChoice from "@/modules/Payment/components/CreditChoice";

interface CreditListProps {

}

const CreditList: FunctionComponent<CreditListProps> = () => {
    return <div className={'flex flex-wrap mt-2 justify-center'}>
        <CreditChoice creditNumber={10} />
        <CreditChoice creditNumber={20} />
        <CreditChoice creditNumber={30} />
        <CreditChoice creditNumber={50} />
        <CreditChoice creditNumber={75} />
        <CreditChoice creditNumber={100} />
        <CreditChoice creditNumber={200} />
        <CreditChoice creditNumber={500} />
    </div>
}

export default CreditList
