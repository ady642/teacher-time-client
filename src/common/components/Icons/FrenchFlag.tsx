import {FunctionComponent} from "react";

interface FrenchFlagProps {
	className?: string;
}

export const FLAG_SIZE = 24

const FrenchFlag: FunctionComponent<FrenchFlagProps> = ({ className }) => {
	return <img className={className} width={FLAG_SIZE} height={FLAG_SIZE} src="/img/icon/francia.png" alt={'french flag'} />
}

export default FrenchFlag
