import {FunctionComponent} from "react";
import TeachersCreateTextTitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateTextTitle";
import TeachersCreateTextImage
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateTextImage";
import TeachersCreateTextSubtitle
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateText/TeachersCreateTextSubtitle";

interface TeachersCreateTextProps {

}

const TeachersCreateText: FunctionComponent<TeachersCreateTextProps> = () => {
	return <div>
		<TeachersCreateTextTitle />
		<TeachersCreateTextImage />
		<TeachersCreateTextSubtitle />
	</div>
}

export default TeachersCreateText
