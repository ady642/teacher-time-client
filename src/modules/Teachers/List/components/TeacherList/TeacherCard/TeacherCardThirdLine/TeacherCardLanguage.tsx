import {FunctionComponent} from "react";
import { Switch, Case} from "react-switch-case-module"
import Image from 'next/image'

interface TeacherCardLanguageProps {
	lang:string;
	className?: string;
}

const TeacherCardLanguage: FunctionComponent<TeacherCardLanguageProps> = ({ lang, className }) => {
	return <div className={`rounded flex items-center justify-center overflow-hidden ${className}`}>
		<Switch componentName={lang} defaultComponent={<Image width={32} height={32} src={'/img/icon/francia.png'}/>}>
			<Case value={'fr'}>
				<Image width={24} height={22} src={'/img/icon/francia.png'}/>
			</Case>
			<Case value={'es'}>
				<Image width={24} height={22} src={'/img/icon/espana.png'}/>
			</Case>
		</Switch>
	</div>
}

export default TeacherCardLanguage
