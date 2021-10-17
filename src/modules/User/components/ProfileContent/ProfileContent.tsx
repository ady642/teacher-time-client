import {FunctionComponent, useState} from "react";
import styles from "@/modules/User/styles/profile.module.scss";
import ProfileTabs from "@/modules/User/components/ProfileContent/ProfileTabs";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import ProfileContentLeft from "@/modules/User/components/ProfileContent/ProfileContentLeft/ProfileContentLeft";
import VerticalDivider from "@/common/components/Dividers/VerticalDivider";
import ProfileContentRight from "@/modules/User/components/ProfileContent/ProfileContentRight/ProfileContentRight";
import ProfileContentEditionModal
	from "@/modules/User/components/ProfileContent/ProfileContentEditionModal/ProfileContentEditionModal";

interface ProfileContentProps  {
	teacher: Teacher
}

export enum ProfileTabsIndexes {
	PROFILE
}

const ProfileContent: FunctionComponent<ProfileContentProps> = ({ teacher }) => {
	const [tabSelected, selectTab] = useState(ProfileTabsIndexes.PROFILE)
	const [editionModalOpened, setEditionModalOpened] = useState(false)
	const [fieldToModify, setFieldToModify] = useState('')

	const openEditionModal = (fieldToModify: string) => {
		setFieldToModify(fieldToModify)
		setEditionModalOpened(true)
	}

	return <div className={'flex flex-col w-full'}>
		<ProfileTabs tabSelected={tabSelected} selectTab={selectTab} />
		<div className={styles['content__main']}>
			<ProfileContentLeft openEditionModal={openEditionModal} teacher={teacher} />
			<VerticalDivider />
			<ProfileContentRight openEditionModal={openEditionModal} teacher={teacher} />
		</div>
		<ProfileContentEditionModal
			fieldToModify={fieldToModify}
			open={editionModalOpened}
			handleClose={() => setEditionModalOpened(false)}
		/>
	</div>
}

export default ProfileContent
