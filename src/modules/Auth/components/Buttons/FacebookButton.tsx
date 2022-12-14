import {FunctionComponent} from "react";
import styles from '@/modules/Auth/components/Buttons/FacebookButton.module.scss'
import useTranslation from "@/common/hooks/useTranslation";

interface FacebookButtonProps {
    onClick: () => void
}

const FacebookButton: FunctionComponent<FacebookButtonProps> = ({onClick}) => {
	const { t } = useTranslation()

	return <div onClick={onClick} className={`${styles.fbButton} flex rounded px-1 py-2 cursor-pointer`}>
		<div className={styles.fbIcon}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="50 67 400 368" className="_1zSZ8Eq1AbrWcN1aH-cv5K">
				<path
					d="M432.5 250c0-100.8-81.7-182.5-182.5-182.5S67.5 149.2 67.5 250c0 91.1 66.7 166.6 154 180.3V302.8h-46.3V250h46.3v-40.2c0-45.7 27.2-71 68.9-71 20 0 40.9 3.6 40.9 3.6v44.9h-23c-22.7 0-29.7 14.1-29.7 28.5V250h50.6l-8.1 52.8h-42.5v127.5c87.2-13.7 153.9-89.2 153.9-180.3z"
					fill="#fff"></path>
				<path
					d="M321 302.8l8.1-52.8h-50.6v-34.2c0-14.4 7.1-28.5 29.7-28.5h23v-44.9s-20.9-3.6-40.9-3.6c-41.7 0-68.9 25.3-68.9 71V250h-46.3v52.8h46.3v127.5c9.3 1.5 18.8 2.2 28.5 2.2s19.2-.8 28.5-2.2V302.8H321z"
					fill="#1877f2"></path>
			</svg>
		</div>
		<span className={'text-bold text-white text-l flex justify-center flex-1'}>
			{ t('common.facebook') }
		</span>
	</div>
}

export default FacebookButton
