import {FunctionComponent, MouseEvent} from "react";
import teachersFormInfosStepperStyle from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosStepper/teachersFormInfosStepper.module.scss"

export interface TeacherFormInfosStepperItemProps {
    active: boolean;
    title: string;
    subtitle: string;
    onClick: (e?: MouseEvent<HTMLDivElement>) => void
}

const TeacherFormInfosStepperItem: FunctionComponent<TeacherFormInfosStepperItemProps> = ({ onClick, title, subtitle, active }) => {
	return <div onClick={(e) => onClick(e)} className={teachersFormInfosStepperStyle[`teachers-form-infos__stepper__item ${active ? "active" : ''}`]}>
		<aside className={teachersFormInfosStepperStyle[`teachers-form-infos__stepper__item__title ${active ? "active" : ''} test`]}>
			{ title }
		</aside>
		<p className={teachersFormInfosStepperStyle['teachers-form-infos__stepper__item__subtitle']}>
			{ subtitle }
		</p>
	</div>
}

export default TeacherFormInfosStepperItem
