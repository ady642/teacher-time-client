import {FunctionComponent} from "react";
import { Switch, Case} from "react-switch-case-module"
import FieldSelection
	from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelection";

interface TeachersFormInfosFieldsProps {

}

const TeachersFormInfosFields: FunctionComponent<TeachersFormInfosFieldsProps> = () => {
	return <Switch defaultComponent={<FieldSelection />} componentName={'Field'}>
		<Case value={'Field'}><FieldSelection /></Case>
		<Case value={'description'}><textarea name="description"/></Case>
	</Switch>
}

export default TeachersFormInfosFields
