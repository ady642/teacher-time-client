import {FunctionComponent} from "react";
import styles from "@/modules/User/components/ProfileContent/ProfileContentLeft/styles.module.scss";
import EditionButton from "@/modules/User/components/ProfileContent/ProfileContentLeft/EditionButton";

interface ProfileContentElementProps {

}

const ProfileContentElement: FunctionComponent<ProfileContentElementProps> = ({ children }) => {
	return <div className={styles['profile-content-element']}>
		{ children }
		<EditionButton />
	</div>
}

export default ProfileContentElement
