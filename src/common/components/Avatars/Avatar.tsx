import {FunctionComponent} from "react";
import { Avatar as MaterialAvatar } from "@material-ui/core";

interface AvatarProps {
    src: string
}

const Avatar: FunctionComponent<AvatarProps> = ({ src }) => {
    return <MaterialAvatar alt={'avatar'} src={src} />
}

export default Avatar
