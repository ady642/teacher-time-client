import {FunctionComponent} from "react";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import CardForm from "@/modules/Payment/components/CreditCardForm/CardForm";
import CardFormModel from '@/modules/Payment/models/CardForm'

interface CreditCardModalProps {
    handleCloseModal: Function
    creditCardModalOpened: boolean
    addCard: (card: CardFormModel) => void
}

const CreditCardModal: FunctionComponent<CreditCardModalProps> = ({ creditCardModalOpened, addCard, handleCloseModal }) => {
    return <Dialog open={creditCardModalOpened} onClose={() => handleCloseModal()}>
        <DialogTitle id="form-dialog-title">Ajouter une carte bancaire</DialogTitle>
        <DialogContent className={'pb-10'}>
            <CardForm
                addCard={addCard}
            />
        </DialogContent>
    </Dialog>
}

export default CreditCardModal
