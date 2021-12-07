import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/common/components/Headers/LandingHeader/headerStyles.module.scss'
import TailwindButton from "@/common/components/Buttons/TailwindButton";
import useRoutePush from "@/common/hooks/useRoutePush";

interface LoginButtonProps {

}

const LoginButton: FunctionComponent<LoginButtonProps> = () => {
	const { t } = useTranslation()
	const { goTo } = useRoutePush()

	const goToTeacherCreate = () => {
		goTo('teachers/create')
	}

	return <TailwindButton onClick={() => goToTeacherCreate()} outlined={true} className={styles['landingHeader__loginButton']}>
		{ t('common.login') }
	</TailwindButton>
}

export default LoginButton
