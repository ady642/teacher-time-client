import {FunctionComponent} from "react";

interface CreditChoiceProps {
    creditNumber: number
    active: boolean
    onClick: Function
}

const CreditChoice: FunctionComponent<CreditChoiceProps> = ({ onClick, creditNumber = 20, active = false }) => {
    return <div
        onClick={() => onClick()}
        className={`${ active ? 'border-2 border-green-400 bg-green-50' : 'border border-gray-300' } w-24 sm:w-36 hover:-translate-y-1 cursor-pointer h-15 sm:h-20 rounded text-black bg-white flex justify-center items-center`}
    >
        <div>
            <span className="text-xl sm:text-3xl font-bold">{ creditNumber }</span>
            <span className="text-sm sm:text-md">€</span>
        </div>
    </div>
}

export default CreditChoice
