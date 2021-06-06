import {FunctionComponent} from "react";
import TeacherCard from "@/modules/Teachers/components/TeacherList/TeacherCard";
import Teacher from "@/modules/Teachers/models/Teacher";
import useTranslation from "@/common/hooks/useTranslation";

interface TeacherListProps {
    teachers: Teacher[];
    onClickOnTeacherCall: (id: string) => void;
    noRooms: boolean;
}

const TeacherList: FunctionComponent<TeacherListProps> = ({ teachers, onClickOnTeacherCall, noRooms }) => {
	const { t } = useTranslation();

	return <div className={'w-full h-full p-8'}>
		{ noRooms && <h2 className={'text-l uppercase text-gray-500'}>Aucuns professeurs n'est disponible pour l'instant</h2>}
		{ !noRooms &&
			<>
				<h2 className={'text-l uppercase text-gray-500'}>{t("availableTeachers")}</h2>
				<section className={'flex flex-wrap justify-between mt-4'}>
					{
						teachers.map((teacher: Teacher) => <TeacherCard
							key={teacher.name}
							teacher={teacher}
							onClickOnTeacherCall={onClickOnTeacherCall}
						/>)
					}
				</section>
			</>}
	</div>
}

export default TeacherList
