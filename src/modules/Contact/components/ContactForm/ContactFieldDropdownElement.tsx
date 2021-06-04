import {FunctionComponent} from "react";

interface ContactFieldDropdownElementProps {
    title: string;
    onClick: (title: string) => void;
}

const ContactFieldDropdownElement: FunctionComponent<ContactFieldDropdownElementProps> = ({ title, onClick }) => {
	return <div className="text-md hover:bg-blue-200 cursor-pointer rounded p-1" onClick={() => onClick(title)}>
		{ title }
	</div>
}

export default ContactFieldDropdownElement
