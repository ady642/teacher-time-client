import {FunctionComponent, useState} from "react";
import styles from "@/modules/User/styles/profile.module.scss";
import ProfileTabs from "@/modules/User/components/ProfileContent/ProfileTabs";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";
import ProfileContentLeft from "@/modules/User/components/ProfileContent/ProfileContentLeft/ProfileContentLeft";
import VerticalDivider from "@/common/components/Dividers/VerticalDivider";
import ProfileContentRight from "@/modules/User/components/ProfileContent/ProfileContentRight/ProfileContentRight";

interface ProfileContentProps  {
	teacher: Teacher
}

export enum ProfileTabsIndexes {
	PROFILE
}

const ProfileContent: FunctionComponent<ProfileContentProps> = ({ teacher }) => {
	const [tabSelected, selectTab] = useState(ProfileTabsIndexes.PROFILE)

	return <div className={'flex flex-col w-full'}>
		<ProfileTabs tabSelected={tabSelected} selectTab={selectTab} />
		<div className={styles['content__main']}>
			<ProfileContentLeft teacher={teacher} />
			<VerticalDivider />
			<ProfileContentRight teacher={teacher} />
		</div>
	</div>
}

export default ProfileContent
