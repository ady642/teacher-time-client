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
	return <div className={`max-w-4xl text-black flex flex-col ${reverse ? 'xl:mr-20 md:mr-10 ml-0' : 'xl:ml-20 md:ml-10' } ml-0`}>
		<span className="lg:text-4xl md:text-3xl text-xl font-black md:mt-0 mt-4">{ title }</span>
		<span className="lg:text-3xl md:text-2xl text-lg md:mt-8 mt-3">{ subtitle }</span>
		<HomeButton url={urlTo} text={textTo} />
	</div>
}

export default HomeText
