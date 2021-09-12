import React, {FunctionComponent, ReactElement} from "react";
import HomeText from "@/modules/home/components/HomeText";
import Draw from "@/modules/home/components/Draw";

interface TextDrawProps {
	title: string;
	subtitle: string | ReactElement | Element;
	urlTo?: string;
	textTo: string | JSX.Element;
	srcDraw: string;
	reverse ?: boolean;
	callback?: () => void;
}

const TextDraw: FunctionComponent<TextDrawProps> = ({ callback, reverse = false, srcDraw, title, subtitle, urlTo, textTo }) => {
	return<section className={`flex sm:my-28 my-10 ${reverse ? 'md:flex-row-reverse': 'md:flex-row' } flex-col items-center justify-between w-full`}>
		<Draw src={srcDraw} />
		<HomeText
			callback={callback}
			title={title} subtitle={subtitle} urlTo={urlTo} textTo={textTo} reverse={reverse} />
	</section>
}

export default TextDraw
