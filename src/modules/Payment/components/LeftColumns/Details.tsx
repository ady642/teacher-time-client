import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";

interface DetailsProps {

}

const Details: FunctionComponent<DetailsProps> = () => {
	return <div>
		<h3 className={styles['payment__credits-information__title']}>Détails de la facturation</h3>
		<h4 className={`${styles['payment__credits-information__title']} flex items-center`}>
			Notre système de paiement est géré par Stripe
			<img className={'ml-2'} src={'/img/icon/stripe.png'} width="24" height="24" alt={'stripe-icon'} />
		</h4>
	</div>
}

export default Details
