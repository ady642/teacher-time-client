import React, {FC} from "react";
import ResetButton from "@/modules/Payment/components/CreditCardForm/ResetButton";

interface SuccessPaymentCardProps {
    creditsChoosen: number
    reset: () => void
}


const SuccessPaymentCard: FC<SuccessPaymentCardProps> = ({ creditsChoosen, reset }) => {
    return <div className="Result">
        <div className="ResultTitle" role="alert">
            Paiement accepté
        </div>
        <div className="ResultMessage">
            Bravo ! votre compote a été crédité de {creditsChoosen}€. Vous pouvez à présent passer des appels
        </div>
        <ResetButton onClick={reset} />
    </div>
}

export default SuccessPaymentCard
