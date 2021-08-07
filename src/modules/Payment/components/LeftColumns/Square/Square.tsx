import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";
import SquareHeader from "@/modules/Payment/components/LeftColumns/Square/SquareHeader";
import SquareList from "@/modules/Payment/components/LeftColumns/Square/SquareList";

interface SquareProps {
	creditsChosen: number
}

const Square: FunctionComponent<SquareProps> = ({ creditsChosen }) => {
	const calculateAverageTime = (credits: number) => {
		const averageHourlyRate = 20

		return (credits / averageHourlyRate) * 60
	}

	const baseFeatures = ['Contacter en un click n\'importe quel professeur disponible de teacher-time',
		'Accéder à la salle de la classe et son tableau blanc']

	const texts: string[]= [...baseFeatures,
		`${calculateAverageTime(creditsChosen)} minutes de conversation (moyenne avec taux horaire de 20 €)`]

	return <section className={styles['payment__aside-information__square']}>
		<SquareHeader creditsChosen={creditsChosen}/>
		<SquareList
			texts={texts}
		/>
	</section>
}

export default Square
