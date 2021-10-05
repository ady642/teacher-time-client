import {FunctionComponent} from "react";
import {AccountBox} from "@material-ui/icons";

interface ProfileProps {
	className?: string
}

const ProfileLittle: FunctionComponent<ProfileProps> = ({ className }) => {
	return <AccountBox className={className}/>
}

export default ProfileLittle
