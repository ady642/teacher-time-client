import {FunctionComponent} from "react";
import styles from '@/modules/Auth/components/Buttons/GoogleButton.module.scss'

interface GoogleButtonProps {
    onClick: () => void
}

const GoogleButton: FunctionComponent<GoogleButtonProps> = ({ onClick }) => {
	return <div onClick={onClick} className={styles.googleBtn}>
		<div className={styles.googleIconWrapper}>
			<img className={styles.googleIcon}
				src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
				alt="google-button"
			/>
		</div>
		<p className={styles.btnText}>Inscription avec Google</p>
	</div>

}

export default GoogleButton
