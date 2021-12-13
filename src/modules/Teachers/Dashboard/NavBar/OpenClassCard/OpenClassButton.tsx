import {FunctionComponent} from "react";
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import styles from './openClassCardStyles.module.scss'
import useTranslation from "@/common/hooks/useTranslation";

interface OpenClassButtonProps {

}

const OpenClassButton: FunctionComponent<OpenClassButtonProps> = () => {
	const activateClass = () => {
		// TODO - open modal to say that class is opened and available in teacher list
	}

	const { t } = useTranslation()

	return <TailwindButton
		onClick={activateClass}
		className={styles['open-class-card__button']}
	>
		{ t('dashboard.createClass') }
	</TailwindButton>
}

export default OpenClassButton
