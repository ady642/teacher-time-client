import {FunctionComponent} from "react";
import styles from "@/modules/Teachers/Dashboard/Content/Home/components/LastMessages/lastMessagesStyles.module.scss";
import useTranslation from "@/common/hooks/useTranslation";
import MessageItem from "@/modules/Teachers/Dashboard/Content/Home/components/LastMessages/MessageItem";
import User from "@/modules/Auth/types/User";

export interface LastMessageI {
	sender: User,
	message: string
}

interface LastMessagesProps {
	messages: LastMessageI[]
}

const LastMessages: FunctionComponent<LastMessagesProps> = ({ messages }) => {
	const { t } = useTranslation()

	return <div className={styles['last-messages__card']}>
		<h1 className={styles['last-messages__card__title']}>{ t('dashboard.home.lastMessages.title') }</h1>
		{ messages.map((message) => <MessageItem
			key={message.message}
			message={message}
		/> )}
	</div>
}

export default LastMessages
