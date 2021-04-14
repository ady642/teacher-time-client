import {FunctionComponent} from "react";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import CardForm from "@/modules/Payment/components/CardForm";

interface CreditCardModalProps {
    handleCloseModal: Function
    creditCardModalOpened: boolean
}

const CreditCardModal: FunctionComponent<CreditCardModalProps> = ({ creditCardModalOpened, handleCloseModal }) => {
    return <Dialog open={creditCardModalOpened} onClose={() => handleCloseModal()}>
        <DialogTitle id="form-dialog-title">Ajouter une carte bancaire</DialogTitle>
        <DialogContent>
            <CardForm/>
        </DialogContent>
    </Dialog>
}

export default CreditCardModal
