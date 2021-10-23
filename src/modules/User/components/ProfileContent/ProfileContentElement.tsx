import {FunctionComponent} from "react";
import styles from "@/modules/User/components/ProfileContent/ProfileContentLeft/styles.module.scss";
import EditionButton from "@/modules/User/components/ProfileContent/ProfileContentLeft/EditionButton";
import ProfileContentTitle from "@/modules/User/components/ProfileContent/ProfileContentTitle";

interface ProfileContentElementProps {
	title: string;
	onPencilClick: () => void
}

const ProfileContentElement: FunctionComponent<ProfileContentElementProps> = ({ onPencilClick, children, title }) => {
	return <div className={styles['profile-content-element']}>
		<div className={'flex items-center mb-4'}>
			<ProfileContentTitle title={title} />
			<EditionButton onClick={onPencilClick}/>
		</div>
		{ children }
	</div>
}

export default ProfileContentElement
