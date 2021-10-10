import {FunctionComponent} from "react";
import {FLAG_SIZE} from "@/common/components/Icons/FrenchFlag";

interface EnglishFlagProps {
	className?: string
}

const EnglishFlag: FunctionComponent<EnglishFlagProps> = ({ className }) => {
	return <img className={className} width={FLAG_SIZE} height={FLAG_SIZE} src="/img/icon/ingles.png" alt={'english flag'} />
}

export default EnglishFlag
