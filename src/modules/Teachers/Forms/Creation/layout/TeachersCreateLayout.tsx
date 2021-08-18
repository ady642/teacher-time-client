import {FunctionComponent} from "react";
import teachersCreateStyle from "@/modules/Teachers/Forms/Creation/styles/teachersCreateStyle.module.scss"

interface TeachersCreateLayoutProps {
    left: JSX.Element;
    right: JSX.Element;
}

const TeachersCreateLayout: FunctionComponent<TeachersCreateLayoutProps> = ({ left, right }) => {
	return <div className={teachersCreateStyle['teachers-create__layout']}>
		<section className={teachersCreateStyle['teachers-create__left']}>
			{ left }
		</section>
		<section className={teachersCreateStyle['teachers-create__right']}>
			{ right }
		</section>
	</div>
}

export default TeachersCreateLayout
