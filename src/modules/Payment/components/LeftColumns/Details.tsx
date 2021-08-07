import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";

interface DetailsProps {

}

const Details: FunctionComponent<DetailsProps> = () => {
	return <div className={'mt-auto'}>
		<h3 className={styles['payment__credits-information__title']}>Détails de la facturation</h3>
		<h4 className={`${styles['payment__credits-information__details-subtitle']} flex items-center`}>
			Notre système de paiement est géré par
			<a className={'ml-1 text-indigo-600 font-bold flex items-center'} href="https://stripe.com">
				Stripe <img className={'ml-2'} src={'/img/icon/stripe.png'} width="24" height="24" alt={'stripe-icon'} />
			</a>
		</h4>
		<h5 className={styles['payment__credits-information__details-subtitle-2']}>
			Pour toutes questions, vous pouvez contacter notre support:
			<a href="mailto:webmaster@teacher.com" className={'pointer font-bold ml-2 text-blue-400	'}>webmaster@teacher-time.com</a>
		</h5>
	</div>
}

export default Details
