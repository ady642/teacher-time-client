import {FunctionComponent} from "react";
import TeacherCardLanguage
	from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCardThirdLine/TeacherCardLanguage";

interface TeacherCardLanguagesProps {
    languages: string[];
}

const TeacherCardLanguages: FunctionComponent<TeacherCardLanguagesProps> = ({ languages }) => {
	return <div className={'flex'}>
		{ languages.map((lang: string, i: number) => <TeacherCardLanguage className={i < languages.length ? 'mr-2': ''} lang={lang} key={lang} />) }
	</div>
}

export default TeacherCardLanguages
