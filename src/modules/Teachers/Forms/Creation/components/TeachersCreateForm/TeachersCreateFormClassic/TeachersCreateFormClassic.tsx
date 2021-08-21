import {FunctionComponent} from "react";
import TeachersCreateFormClassEmail
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassEmail";
import TeachersCreateFormClassFirstName
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassFirstName";
import TeachersCreateFormClassLastName
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassLastName";
import TeachersCreateFormClassPassword
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Inputs/TeachersCreateFormClassPassword";
import TeachersCreateFormClassButton
	from "@/modules/Teachers/Forms/Creation/components/TeachersCreateForm/TeachersCreateFormClassic/Buttons/TeachersCreateFormClassButton";

interface TeachersCreateFormClassicProps {

}

const TeachersCreateFormClassic: FunctionComponent<TeachersCreateFormClassicProps> = () => {
	return <form>
		<TeachersCreateFormClassFirstName value={'Adrien'} setValue={() => console.log('set email')} />
		<TeachersCreateFormClassLastName value={'HM'} setValue={() => console.log('set last name')} />
		<TeachersCreateFormClassEmail value={'ady642@gmail.com'}  setValue={() => console.log('set email')}/>
		<TeachersCreateFormClassPassword value={'sdfsdfds'} setValue={() => console.log('set password')} />
		<TeachersCreateFormClassButton registrationStatus={'PENDING'} onClick={() => console.log('click on button')} />
	</form>
}

export default TeachersCreateFormClassic
