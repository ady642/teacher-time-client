import {FunctionComponent} from "react";
import ProfileContentElement from "@/modules/User/components/ProfileContent/ProfileContentElement";
import Tag from "@/common/components/Tags/Tag";
import ProfileContentIcon from "@/modules/User/components/ProfileContent/ProfileContentIcon";
import { Levels} from "@/modules/Teachers/Forms/Creation/components/TeachersFormInfos/TeachersFormInfosFields/Level/LevelSelection";
import styles from "@/modules/User/components/ProfileContent/styles.module.scss";

interface ProfileContentLevelsProps {
    levels: string[];
	openEditionModal: (fieldToModify:string) => void;
}

const ProfileContentLevels: FunctionComponent<ProfileContentLevelsProps> = ({ levels, openEditionModal }) => {
	const levelName: {
		[key: string]: { label: string }
	} = {
		[Levels.PRIMAIRE]: { label: 'Primaire' },
		[Levels.COLLEGE]: { label: 'Collège' },
		[Levels.LYCEE]: { label: 'Lycée' },
		[Levels.SUPERIEUR]: { label: 'Supérieur' },
	}

	return <ProfileContentElement onPencilClick={() => openEditionModal('levels')} title={'Niveau'}>
		<div className={styles['tag-profile-container']}>
			{ levels.map(level => <Tag key={level}>
				<div className={'flex items-center'}>
					<ProfileContentIcon src={`/img/icon/levels/${level}.svg`} />
					{ levelName[level].label }
				</div>
			</Tag>) }
		</div>
	</ProfileContentElement>

}

export default ProfileContentLevels
