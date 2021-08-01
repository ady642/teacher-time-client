import {FunctionComponent} from "react";
import TailwindCard from "@/common/components/Cards/TailwindCard";
import CardForm from "@/modules/Payment/components/CreditCardForm/CardForm";

interface PaymentMethodCardProps {
    creditsChosen: number
}

const PaymentMethodCard: FunctionComponent<PaymentMethodCardProps> = ({ creditsChosen }) => {
	return <TailwindCard className={'h-min'}>
		<div className={'flex w-full justify-between items-center border-b-2 p-4'}>
			<div className={'flex items-center'}>
				<h1 className={'text-black text-xl'}>Paiement</h1>
			</div>
		</div>
		<div className={'p-5'}>
			<CardForm creditsChosen={creditsChosen} />
		</div>
	</TailwindCard>
}

export default PaymentMethodCard
