import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/common/components/Headers/LandingHeader/headerStyles.module.scss'

interface LoginButtonProps {

}

const LoginButton: FunctionComponent<LoginButtonProps> = () => {
	const { t } = useTranslation()

	return <button className={styles['landingHeader__loginButton']}>
		{ t('common.login') }
	</button>
}

export default LoginButton
