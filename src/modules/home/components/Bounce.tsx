import React, {FunctionComponent} from "react";

interface BounceProps {
    className: string;
}

const Bounce: FunctionComponent<BounceProps> = ({ className }) => <div style={{ width:'11vw', height:'11vw'}} className={`animate-bounce absolute rounded-full flex items-center justify-center ${className}`} />

export default Bounce
