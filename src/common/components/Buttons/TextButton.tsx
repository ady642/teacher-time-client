import {FC} from "react";
import { Button } from '@material-ui/core';

interface TextButtonProps {
    text: string
}

const TextButton: FC<TextButtonProps> = ({ text }) => {
    return <Button className={'text-white'}>{text}</Button>
}

export default TextButton
