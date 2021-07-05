import React, {FunctionComponent, ReactElement} from "react";
import HomeText from "@/modules/home/components/HomeText";
import Bounce from "@/modules/home/components/Bounce";
import Draw from "@/modules/home/components/Draw";

interface TextDrawProps {
	title: string;
	subtitle: string | ReactElement | Element;
	urlTo: string;
	textTo: string;
	classBounce: string;
	bottomBounce: string;
	leftBounce: string;
	srcDraw: string;
	reverse ?: boolean
}

const TextDraw: FunctionComponent<TextDrawProps> = ({ reverse = false, srcDraw, bottomBounce, classBounce, leftBounce, title, subtitle, urlTo, textTo }) => {
	return <section className={`relative flex sm:my-28 sm:mb-48 my-16 md:ml-16`}>
		<div className={`flex ${reverse ? 'md:flex-row-reverse': 'md:flex-row' } flex-col items-center justify-between`}>
			<Draw src={srcDraw} />
			<HomeText title={title} subtitle={subtitle} urlTo={urlTo} textTo={textTo} reverse={reverse} />
		</div>
		<Bounce className={classBounce} bottom={bottomBounce} left={leftBounce} />
	</section>
}

export default TextDraw
