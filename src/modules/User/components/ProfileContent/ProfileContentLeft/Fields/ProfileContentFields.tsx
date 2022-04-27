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
		[key: string]: { label: string, icon: string }
	} = {
		[Fields.MATHS]: { icon: '/img/icon/pi.svg', label: 'Mathématiques' },
		[Fields.ENGLISH]: { icon: '/img/icon/ingles.png', label: 'Anglais' },
		[Fields.SPANISH]: { icon: '/img/icon/espana.png', label: 'Espagnol' },
		[Fields.FRENCH]: { icon: '/img/icon/francia.png', label: 'Français' },
		[Fields.HISTORY]: { icon: '/img/icon/fields/history.png', label: 'Histoire' },
		[Fields.PHILOSOPHY]: { icon: '/img/icon/fields/philosophy.png', label: 'Philosophie' },
	}

	return <ProfileContentElement  onPencilClick={() => openEditionModal('fields')} title={'Vos spécialités'}>
		<div className={styles['tag-profile-container']}>
			{ fields.map(field => <Tag key={field}>
				<div className={'flex items-center'}>
					<ProfileContentIcon src={fieldName[field].icon} />
					{ fieldName[field].label }
				</div>
			</Tag>) }
		</div>
	</ProfileContentElement>
}

export default ProfileContentFields
