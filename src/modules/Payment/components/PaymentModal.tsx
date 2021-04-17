import {FunctionComponent} from "react";
import Modal from "@/common/components/Modals/Modal";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import CreditList from "@/modules/Payment/components/CreditList";
import {Elements} from "@stripe/react-stripe-js";
import PaymentMethodCard from "@/modules/Payment/components/PaymentMethodCard";

interface PaymentModalProps {
    creditsChosen: number
    onCreditChange: (credit: number) => void
    open: boolean
    handleClose: () => void
}

const PaymentModal: FunctionComponent<PaymentModalProps> = ({ open, handleClose, creditsChosen, onCreditChange }) => {
    return <Modal open={open} handleClose={handleClose}>
        <div className={'flex justify-center md:p-10 bg-gray-100 h-full'}>
            <div className="flex flex-col">
                <TailwindCard className={"px-4 pb-3 mb-5 h-min"}>
                    <h1 className={"text-gray-600 text-xl m-5"}>Combien de crédits Planete Elève souhaitez-vous acheter ?</h1>
                    <CreditList
                        creditsChosen={creditsChosen}
                        onCreditChange={onCreditChange}
                    />
                </TailwindCard>
                <Elements stripe={stripePromise}>
                    <PaymentMethodCard
                        creditsChosen={creditsChosen}
                    />
                </Elements>
            </div>
        </div>
    </Modal>
}

export default PaymentModal
