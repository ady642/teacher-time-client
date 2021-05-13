import {FunctionComponent} from "react";
import styles from '@/modules/Auth/Buttons/GoogleButton.module.scss'
import useTranslation from "@/common/hooks/useTranslation";

interface GoogleButtonProps {
    onClick: () => void
}

const GoogleButton: FunctionComponent<GoogleButtonProps> = ({ onClick }) => {
	const { t } = useTranslation()

	return <div onClick={onClick} className={styles.googleBtn}>
		<div className={styles.googleIconWrapper}>
			<img className={styles.googleIcon}
				src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
				alt="google-button"
			/>
		</div>
		<p className={styles.btnText}>{ t('common.google') }</p>
	</div>

}

export default GoogleButton
