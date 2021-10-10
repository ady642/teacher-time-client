import React, {FunctionComponent, useState, MouseEvent, useEffect} from "react";
import styles from '@/modules/User/components/LocaleSwitcher/localeSwitcher.module.scss'
import Ripple from "@/common/components/Ripple/Ripple";
import LocaleSwitcherList from "@/modules/User/components/LocaleSwitcher/LocaleSwitcherList";
import { Switch, Case } from 'react-switch-case-module'
import {useRouter} from "next/router";

import FrenchFlag from "@/common/components/Icons/FrenchFlag";
import EnglishFlag from "@/common/components/Icons/EnglishFlag";

import { TweenMax } from "gsap";

interface LocaleSwitcherProps {
	className?: string;
}

const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = () => {
	const { locale } = useRouter()
	const [opened, setOpened] = useState(false)

	const toggleOpened = (e: MouseEvent) => {
		e.preventDefault()
		if(opened === false){
			TweenMax.to("#localesSwitcherList", 0.5, {height: 100});
			setOpened(true);
		}
		else {
			TweenMax.to("#localesSwitcherList", 0.5, {height: 0});
			setOpened(false);
		}
	}

	return <div id={'container'} className={styles.localeSwitcher}>
		<Ripple>
			<div id={'open'} onClick={toggleOpened} className={styles['locale-switcher__activator']}>
				<Switch componentName={locale === 'fr' ? 'French': 'English'} defaultComponent={<FrenchFlag />}>
					<Case value={'French'}>
						<FrenchFlag />
					</Case>
					<Case value={'English'}>
						<EnglishFlag />
					</Case>
				</Switch>
			</div>
		</Ripple>
		 <LocaleSwitcherList />
	</div>
}

export default LocaleSwitcher
