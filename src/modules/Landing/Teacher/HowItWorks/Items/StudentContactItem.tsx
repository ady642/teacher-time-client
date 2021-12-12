import {FunctionComponent} from "react";
import useTranslation from "@/common/hooks/useTranslation";
import HiwItem from "@/modules/Landing/Teacher/HowItWorks/Items/HiwItem";

interface StudentContactItemProps {

}

const StudentContactItem: FunctionComponent<StudentContactItemProps> = () => {
	const { t } = useTranslation()

	return <HiwItem
		index={2}
		imageSrc={'/img/hiw/studentContact.svg'}
		text={t('landing.hiw.studentContact')}
	/>
}

export default StudentContactItem
