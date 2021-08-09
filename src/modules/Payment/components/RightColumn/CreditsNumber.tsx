import {FunctionComponent} from "react";
import TTCoin from "@/common/components/Icons/TTCoin";

interface CreditsNumberProps {
    credits: number
}

const CreditsNumber: FunctionComponent<CreditsNumberProps> = ({ credits }) => {
	return <div className={'flex font-bold items-center border-white border py-1 px-3'}>
		<span className="font-bold text-lg mr-1 text-xl">{credits / 100}</span>
		<TTCoin />
	</div>
}

export default CreditsNumber
