import {FunctionComponent} from "react";
import classNames from "classnames";
import styles from './styles.module.scss';

interface TagProps {
    className?: string;
}

const Tag: FunctionComponent<TagProps> = ({ className, children }) => {
	const classes = classNames(className, styles['tag'])

	return <div className={classes}>
		{ children }
	</div>
}

export default Tag
