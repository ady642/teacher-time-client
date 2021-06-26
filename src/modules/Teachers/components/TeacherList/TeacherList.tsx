import {FunctionComponent} from "react";
import TeacherCard from "@/modules/Teachers/components/TeacherList/TeacherCard/TeacherCard";
import Teacher from "@/modules/Teachers/models/Teacher";
import useTranslation from "@/common/hooks/useTranslation";

interface TeacherListProps {
    teachers: Teacher[];
    onCall: (id: string) => void;
    noRooms: boolean;
}

const TeacherList: FunctionComponent<TeacherListProps> = ({ teachers, onCall, noRooms }) => {
	const { t } = useTranslation();

	return <div className={'w-full h-full'}>
		{ noRooms && <h2 className={'text-l uppercase text-gray-500'}>Aucuns professeurs n'est disponible pour l'instant</h2>}
		{ !noRooms &&
			<>
				<section className={'flex flex-wrap justify-between mt-6'}>
					{
						teachers.map((teacher: Teacher) => <TeacherCard
							key={teacher._id}
							teacher={teacher}
							onCall={onCall}
						/>)
					}
				</section>
			</>}
	</div>
}

export default TeacherList
