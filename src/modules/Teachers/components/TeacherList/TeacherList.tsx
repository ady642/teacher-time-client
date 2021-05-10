import {FunctionComponent} from "react";
import TeacherCard from "@/modules/Teachers/components/TeacherList/TeacherCard";
import Teacher from "@/modules/Teachers/models/Teacher";

interface TeacherListProps {
    teachers: Teacher[];
    onClickOnTeacherCall: (id: string) => void
}

const TeacherList: FunctionComponent<TeacherListProps> = ({ teachers, onClickOnTeacherCall }) => {
	return <div className={'bg-gray-100 w-full h-full p-8 px-2 lg:px-20'}>
		<h2 className={'text-l uppercase text-gray-500'}>Professeurs disponibles</h2>
		<section className={'flex flex-wrap justify-between mt-4'}>
			{
				teachers.map((teacher: Teacher) => <TeacherCard
					key={teacher.id}
					teacher={teacher}
					onClickOnTeacherCall={onClickOnTeacherCall}
				/>)
			}
		</section>
	</div>
}

export default TeacherList