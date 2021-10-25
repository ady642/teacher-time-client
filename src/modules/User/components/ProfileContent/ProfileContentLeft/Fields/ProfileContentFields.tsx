import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import Tag from "@/common/components/Tags/Tag";
import {Fields} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/FieldSelection/FieldSelectionIntegration";
import ProfileContentIcon from "@/modules/User/components/ProfileContent/ProfileContentIcon";
import styles from "@/modules/User/components/ProfileContent/styles.module.scss";

interface ProfileContentFieldsProps {
    fields: string[];
	openEditionModal: (fieldToModify:string) => void;
}

const ProfileContentFields: FunctionComponent<ProfileContentFieldsProps> = ({ fields, openEditionModal }) => {
	const fieldName: {
		[key: string]: { label: string }
	} = {
		[Fields.MATHS]: { label: 'Mathématiques' },
		[Fields.ENGLISH]: { label: 'Anglais' },
		[Fields.SPANISH]: { label: 'Espagnol' },
		[Fields.FRENCH]: { label: 'Français' },
	}

	return <ProfileContentElement  onPencilClick={() => openEditionModal('fields')} title={'Vos spécialités'}>
		<div className={styles['tag-profile-container']}>
			{ fields.map(field => <Tag key={field}>
				<div className={'flex items-center'}>
					<ProfileContentIcon src={`img/icon/fields/${field}.svg`} />
					{ fieldName[field].label }
				</div>
			</Tag>) }
		</div>
	</ProfileContentElement>
}

export default ProfileContentFields