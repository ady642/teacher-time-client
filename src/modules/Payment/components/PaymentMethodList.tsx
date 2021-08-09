import {FunctionComponent} from "react";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";

interface PaymentMethodListProps {
    handleItemClick: Function
}

const PaymentMethodList: FunctionComponent<PaymentMethodListProps> = ({ handleItemClick }) => {
	return <List className={'w-full'}>
		<ListItem button>
			<ListItemAvatar>
				<Avatar>
					<CreditCardIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText onClick={() => handleItemClick()} primary="Carte de crédit/débit" secondary="Ajouter une nouvelle carte" />
		</ListItem>
		<Divider variant="middle" component="li" />
	</List>
}

export default PaymentMethodList
