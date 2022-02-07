import {FunctionComponent} from "react";
import {
	LastMessageI
} from "@/modules/Teachers/Dashboard/Content/Home/components/LastMessages/LastMessages";
import styles from "@/modules/Teachers/Dashboard/Content/Home/components/LastMessages/lastMessagesStyles.module.scss";
import Image from "next/image";
import TTDivider from "@/common/components/Dividers/Divider";

interface MessageItemProps {
    message: LastMessageI
}

const MessageItem: FunctionComponent<MessageItemProps> = ({ message }) => {
	return <div className={styles['last-messages__card__item']}>
		<div className={styles['last-messages__card__item__avatar']}>
			<Image src={'/img/avatars/gertrudis.svg'} width={62} height={62} />
		</div>
		<div className={styles['last-messages__card__item__infos']}>
			<span className={styles['last-messages__card__item__infos__name']}>
				{ message.sender.firstName } { message.sender.lastName }
			</span>
			<span className={styles['last-messages__card__item__infos__time']}>
				{ message.message }
			</span>
			<TTDivider />
		</div>
	</div>
}

export default MessageItem
