import {FunctionComponent} from "react";
import styles from "@/modules/Payment/components/payment.module.scss";

interface TitlesProps {
	creditsChosen: number
}

const Titles: FunctionComponent<TitlesProps> = ({ creditsChosen }) => {
	const mapTextsWithCredits: Record<number, string> = {
		5: 'Je choisis d\'acheter 5 Teacher time credits',
		10: 'Je choisis d\'acheter 10 Teacher time credits',
		20: 'Je choisis d\'acheter 20 Teacher time credits',
		30: 'Je choisis d\'acheter 30 Teacher time credits',
		50: 'Je choisis d\'acheter 50 Teacher time credits',
		75: 'Je choisis d\'acheter 75 Teacher time credits',
		100: 'Je choisis d\'acheter 100 Teacher time credits',
		200: 'Je choisis d\'acheter 200 Teacher time credits',
		500: 'Je choisis d\'acheter 500 Teacher time credits',
	}

	return <div className="mt-4">
		<h1 className={styles['payment__aside-information__title']}>
			{ mapTextsWithCredits[creditsChosen] }
		</h1>
		<h2 className="mt-2">
			{ mapTextsWithCredits[creditsChosen] }
		</h2>
	</div>
}

export default Titles
