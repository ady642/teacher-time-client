import {FC} from "react";
import Image from 'next/image'
import {Case, Switch} from "react-switch-case-module";

interface TextBoxProps {
    width?: number;
    height?: number;
    active: boolean;
}

const TextBox: FC<TextBoxProps> = ({ active, width = 30, height = 30 }) => {
	return <Switch componentName={active ? 'ActiveTextBox': 'NormalTextBox'} defaultComponent={			<Image
		src={'/img/icon/textbox.svg'}
		alt="LogoTextBox"
		width={width}
		height={height}
	/>	}>
		<Case value={'NormalTextBox'}>
			<Image
				src={'/img/icon/textbox.svg'}
				alt="LogoTextBox"
				width={width}
				height={height}
			/>
		</Case>
		<Case value={'ActiveTextBox'}>
			<Image
				src={'/img/icon/textbox-active.svg'}
				alt="LogoTextBox"
				width={width}
				height={height}
			/>
		</Case>
	</Switch>
}

export default TextBox
