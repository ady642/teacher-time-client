import React, {FunctionComponent} from "react";
import Visa from "@/common/components/Icons/Visa";
import Mastercard from "@/common/components/Icons/Mastercard";

interface PaymentAvailableIconsProps {

}

const PaymentAvailableIcons: FunctionComponent<PaymentAvailableIconsProps> = () => {
	return <div className={'flex mb-2'}>
		<Visa />
		<Mastercard className={'ml-2'}/>
	</div>
}

export default PaymentAvailableIcons
