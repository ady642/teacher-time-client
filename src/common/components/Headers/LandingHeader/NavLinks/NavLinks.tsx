import {FunctionComponent} from "react";
import ForStudentLink from "@/common/components/Headers/LandingHeader/NavLinks/ForStudentLink";
import ForTeacherLink from "@/common/components/Headers/LandingHeader/NavLinks/ForTeacherLink";
import styles from "@/common/components/Headers/LandingHeader/headerStyles.module.scss";

interface NavLinksProps {

}

const NavLinks: FunctionComponent<NavLinksProps> = () => {
	return <div className={styles['landingHeader__navLinks']}>
		<ForStudentLink />
		<ForTeacherLink />
	</div>
}

export default NavLinks
