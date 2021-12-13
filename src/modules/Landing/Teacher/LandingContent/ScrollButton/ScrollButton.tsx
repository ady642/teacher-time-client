import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Landing/Teacher/LandingContent/ScrollButton/scrollButtonStyles.module.scss'

interface ScrollButtonProps {

}

const ScrollButton: FunctionComponent<ScrollButtonProps> = () => {
	const { t } = useTranslation()
	const textSplit = t('landing.scrollDown').split('')

	const getAnimationStyle = (index: number) => {
		const delay = 300 + index * 20

		return {
			animationDelay: `${delay}ms`,
		}
	}

	return <a className={styles['scroll-button__link']} href={'#hiw'}>
		<button className={styles['scroll-button']}>
			<div className={styles['scroll-button__icon-container']}>
				<img src={'/img/icon/chevron-down.svg'} className={styles['scroll-button__icon']} alt={'chevron-down'}/>
			</div>
			{
				textSplit.map((text, index) => {
					return <span
						key={index}
						className={styles['scroll-button__text']}
						style={ getAnimationStyle(index) }
					>
						{text === ' ' ? <span>&nbsp;</span> : text}
					</span>
				} )
			}
		</button>
	</a>
}

export default ScrollButton
