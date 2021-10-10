import React, {FunctionComponent, useEffect, useState} from "react";
import styles from "@/modules/User/components/LocaleSwitcher/localeSwitcher.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";

const EnglishFlag = dynamic(() => import('@/common/components/Icons/EnglishFlag'))
const FrenchFlag = dynamic(() => import('@/common/components/Icons/FrenchFlag'))

interface LocaleSwitcherListProps {
}

const LocaleSwitcherList: FunctionComponent<LocaleSwitcherListProps> = () => {
	const { route, locale } = useRouter()

	return <div id={'localesSwitcherList'} className={styles['locale-switcher__list']}>
		<Link href={route} locale="fr">
			<div className={`${styles['locale-switcher__list__item']} ${locale === 'fr' ? `${styles['locale-switcher__list__item--active']}` : '' }`}>
				<FrenchFlag />
			</div>
		</Link>
		<Link href={route} locale="en">
			<div className={`${styles['locale-switcher__list__item']} ${locale === 'en' ? `${styles['locale-switcher__list__item--active']}` : '' }`}>
				<EnglishFlag />
			</div>
		</Link>
	</div>
}

export default LocaleSwitcherList
