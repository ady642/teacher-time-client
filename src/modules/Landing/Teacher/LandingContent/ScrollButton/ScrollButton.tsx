import {FunctionComponent, useRef} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import styles from '@/modules/Landing/Teacher/LandingContent/ScrollButton/scrollButtonStyles.module.scss'

interface ScrollButtonProps {

}

const ScrollButton: FunctionComponent<ScrollButtonProps> = () => {
	const { t } = useTranslation()
	const letterContainer = useRef<HTMLButtonElement>(null)

	async function sleep(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const textSplit = t('landing.scrollDown').split('')

	const handleMouseOver = async () => {
		for(let index = 0; index < textSplit.length; index++) {
			letterContainer.current.children.item(index + 1).classList.add(styles['scroll-button__text--translated'])
			await sleep(40);
		}
	}

	const handleMouseLeave = () => {
		textSplit.forEach((letter, index) => {
			letterContainer.current.children.item(index + 1).classList.remove(styles['scroll-button__text--translated'])
		})
	}

	return <a className={styles['scroll-button__link']} href={'#hiw'}>
		<button ref={letterContainer} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseOver} className={styles['scroll-button']}>
			<div className={styles['scroll-button__icon-container']}>
				<img src={'/img/icon/chevron-down.svg'} className={styles['scroll-button__icon']} alt={'chevron-down'}/>
			</div>
			{
				textSplit.map((text, index) => {
					return <span key={index} className={styles['scroll-button__text']}>
						{text === ' ' ? <span>&nbsp;</span> : text}
					</span>
				} )
			}
		</button>
	</a>
}

export default ScrollButton
