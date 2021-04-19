import {FunctionComponent} from "react";
import { Button } from '@material-ui/core';

interface SimpleButtonProps {
    text: string
    onClick: () => void
    size?: any
    variant?: any
    color?: any
}

const SimpleButton: FunctionComponent<SimpleButtonProps> = (
    { text, onClick, color = 'secondary', variant = 'contained', size = 'small' }
) => <Button
        size={size}
        onClick={onClick}
        variant={variant}
        color={color}
    >
        { text }
    </Button>

export default SimpleButton
