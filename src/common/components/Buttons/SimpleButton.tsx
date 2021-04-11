import {FunctionComponent} from "react";
import { Button } from '@material-ui/core';

interface SimpleButtonProps {
    text: string
    onClick?: Function
}

const SimpleButton: FunctionComponent<SimpleButtonProps> = ({ text, onClick }) => {
    return <Button variant="contained" color="secondary">{ text }</Button>
}

export default SimpleButton
