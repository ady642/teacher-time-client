import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/User/styles/profile.module.scss'

interface AsideInformationsCertificateProps {

}

const AsideInformationsCertificate: FunctionComponent<AsideInformationsCertificateProps> = () => {
	const { t } = useTranslation()

	return <div className={styles['certificate']}>
		<img className={styles['certificate__icon']} src={'/img/icon/valid.svg'} alt="Certificate"/>
		<span className={styles['certificate__text']}>{ t('certificate') }</span>
	</div>
}

export default AsideInformationsCertificate
