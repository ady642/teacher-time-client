import {FunctionComponent} from "react";

interface CreditChoiceProps {
    creditNumber: number
    active: boolean
    onClick: Function
}

const CreditChoice: FunctionComponent<CreditChoiceProps> = ({ onClick, creditNumber = 20, active = false }) => {
    return <div
        onClick={() => onClick()}
        className={`${ active ? 'border-2 border-green-400 bg-green-50' : 'border border-gray-300' } w-36 sm:w-48 hover:-translate-y-1 cursor-pointer h-20 rounded text-black bg-white flex justify-center items-center`}
    >
        <div>
            <span className="text-3xl font-bold">{ creditNumber }</span>
            <span className="text-md">€</span>
        </div>
    </div>
}

export default CreditChoice
