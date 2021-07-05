import React, {FunctionComponent, ReactElement} from "react";
import HomeButton from "@/modules/home/components/HomeButton";

interface HomeTextProps {
    title: string;
	subtitle: string | ReactElement | Element;
    urlTo: string;
    textTo: string;
    reverse?: boolean;
}

const HomeText: FunctionComponent<HomeTextProps> = ({ reverse = false, title, subtitle, urlTo, textTo }) => {
	return <div className={`text-black flex flex-col ${reverse ? 'lg:mr-72 md:mr-10 ml-0' : 'lg:ml-44 md:ml-10' } ml-0`}>
		<span className="md:text-3xl text-xl font-black md:mt-0 mt-4">{ title }</span>
		<span className="md:text-2xl text-lg md:mt-8 mt-3">{ subtitle }</span>
		<HomeButton url={urlTo} text={textTo} />
	</div>
}

export default HomeText
