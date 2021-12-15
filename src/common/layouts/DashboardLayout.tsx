import React, {FunctionComponent} from "react";
import styles from '@/common/styles/DashBoardLayout.module.scss'
import ConnectedComponent from "@/common/components/Headers/ConnectedComponent";

interface DashboardLayoutProps {
    navBar: JSX.Element;
    content: JSX.Element
}

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({ content, navBar }) => {
	return <div className={styles['dashboard-layout__container']}>
		<div className={styles['dashboard-layout__nav-bar']}>{ navBar }</div>
		<div className={styles['dashboard-layout__content']}>
			{ content }
			<div className={styles['dashboard-layout__dropdown-user']}>
				{ //<ConnectedComponent />
					 }
			</div>
		</div>
	</div>
}

export default DashboardLayout
