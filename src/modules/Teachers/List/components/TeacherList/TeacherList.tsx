import {FunctionComponent} from "react";
import TeacherCard from "@/modules/Teachers/List/components/TeacherList/TeacherCard/TeacherCard";
import Teacher from "@/modules/Teachers/List/models/Teacher";

interface TeacherListProps {
    teachers: Teacher[];
    onCall: (id: string) => void;
    onOpenProfile: (id: string) => void;
}

const TeacherList: FunctionComponent<TeacherListProps> = ({ teachers, onCall, onOpenProfile }) => {
	return <div className={'w-full h-full z-0'}>
		{ teachers.length === 0 && <h2 className={'text-l uppercase text-gray-500'}>Aucuns professeurs n'est disponible pour le moment</h2>}
		{ teachers.length > 0 &&
			<>
				<section className={'flex flex-wrap mt-6'}>
					{
						teachers.map((teacher: Teacher) => <TeacherCard
							key={teacher._id}
							teacher={teacher}
							onCall={onCall}
							onOpenProfile={onOpenProfile}
						/>)
					}
				</section>
			</>}
	</div>
}

export default TeacherList