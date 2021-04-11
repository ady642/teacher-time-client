import {FunctionComponent} from "react";

interface CreditChoiceProps {
    creditNumber: number
}

const CreditChoice: FunctionComponent<CreditChoiceProps> = ({ creditNumber = 20 }) => {
    return <div className="
        w-48
        h-20
        rounded
        text-black
        bg-white
        border
        border-gray-300
        flex
        justify-center
        items-center
        mr-4
        mb-4
        "
    >
        <div>
            <span className="text-3xl font-bold">{ creditNumber }</span>
            <span className="text-md">€</span>
        </div>
    </div>
}

export default CreditChoice
