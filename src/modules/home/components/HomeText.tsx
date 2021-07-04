import React, {FunctionComponent} from "react";
import HomeButton from "@/modules/home/components/HomeButton";

interface HomeTextProps {
    title: string;
    subtitle: string;
    urlTo: string;
    textTo: string;
}

const HomeText: FunctionComponent<HomeTextProps> = ({ title, subtitle, urlTo, textTo }) => {
	return <div className={'text-black flex flex-col lg:ml-44 md:ml-10 ml-0'}>
		<span className="md:text-3xl text-xl font-black md:mt-0 mt-4">{ title }</span>
		<span className="md:text-2xl text-lg md:mt-8 mt-3">{ subtitle }</span>
		<HomeButton url={urlTo} text={textTo} />
	</div>
}

export default HomeText
