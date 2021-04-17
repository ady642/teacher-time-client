import {FunctionComponent} from "react";
import { Button } from '@material-ui/core';

interface SimpleButtonProps {
    text: string
    onClick: () => void
    size?: string
}

const SimpleButton: FunctionComponent<SimpleButtonProps> = ({ text, onClick, size }) => {
    return <Button size={'small'} onClick={onClick} variant="contained" color="secondary">{ text }</Button>
}

export default SimpleButton
