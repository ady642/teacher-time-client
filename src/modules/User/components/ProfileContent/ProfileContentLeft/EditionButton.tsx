import {FunctionComponent} from "react";
import {Create} from "@material-ui/icons";
import styles from '@/modules/User/components/ProfileContent/ProfileContentLeft/styles.module.scss'

interface EditionButtonProps {
	onClick: () => void;
}

const EditionButton: FunctionComponent<EditionButtonProps> = ({ onClick }) => {
	return <button onClick={() => onClick()} className={styles['edition-button']}>
		<Create fontSize={'small'} />
	</button>
}

export default EditionButton
