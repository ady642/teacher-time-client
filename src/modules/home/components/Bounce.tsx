import React, {FunctionComponent} from "react";

interface BounceProps {
    className: string;
    bottom: string;
    left: string;
}

const Bounce: FunctionComponent<BounceProps> = ({ className, bottom, left }) => <div style={{bottom, width:'11vw', height:'11vw', left}} className={`animate-bounce absolute rounded-full flex items-center justify-center ${className}`} />

export default Bounce
