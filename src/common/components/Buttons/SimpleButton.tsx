import {FunctionComponent} from "react";
import { Button } from '@material-ui/core';

interface SimpleButtonProps {
    text: string
}

const SimpleButton: FunctionComponent<SimpleButtonProps> = ({ text }) => {
    return <Button variant="contained" color="secondary">{ text }</Button>
}

export default SimpleButton
