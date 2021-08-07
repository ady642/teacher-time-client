import React, {FunctionComponent} from "react";
import Lock from "@/common/components/Icons/Lock";
import styles from "@/modules/Payment/components/payment.module.scss";

interface TextIndicatorsProps {
    error: any,
	closePaymentModal: () => void
}

const TextIndicators: FunctionComponent<TextIndicatorsProps> = ({ error, closePaymentModal }) => {
	return <>
		<p className={`${error ? 'mt-8' : 'mt-2'} flex justify-center items-center`}>
			<Lock />
			<span className={'ml-2 text-xs text-gray-700'}>
                Les paiements sont cryptés à l'aide du protocole SSL.
			</span>
		</p>
		<div onClick={closePaymentModal} className={`${styles['payment__credits-information__title']} transition hover:text-blue-700 flex justify-center cursor-pointer`}>
            Non, merci
		</div>
	</>
}

export default TextIndicators
