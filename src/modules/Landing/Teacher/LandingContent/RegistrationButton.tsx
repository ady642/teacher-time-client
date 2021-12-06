import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import {ButtonProps} from "@/common/types/button";
import styles from './registationButtonStyles.module.scss'

interface RegistrationButtonProps extends Pick<ButtonProps, 'onClick'> {}

const RegistrationButton: FunctionComponent<RegistrationButtonProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <button className={styles['registration-button']} onClick={onClick}>
		{ t('landing.teacher.registration') }
	</button>
}

export default RegistrationButton
