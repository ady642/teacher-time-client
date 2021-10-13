import {FunctionComponent} from "react";
import {Create} from "@material-ui/icons";
import styles from '@/modules/User/components/ProfileContent/ProfileContentLeft/styles.module.scss'

interface EditionButtonProps {

}

const EditionButton: FunctionComponent<EditionButtonProps> = () => {
	return <button className={styles['edition-button']}>
		<Create fontSize={'small'} />
	</button>
}

export default EditionButton
