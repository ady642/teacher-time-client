import {FunctionComponent} from "react";
import { Button } from '@material-ui/core';

interface SimpleButtonProps {
    text: string;
    onClick: () => void;
    size?: any;
    variant?: any;
    color?: any;
    className: string
}

const SimpleButton: FunctionComponent<SimpleButtonProps> = (
	{ text, onClick, color = 'secondary', variant = 'contained', size = 'small', className }
) => <Button
	size={size}
	onClick={onClick}
	variant={variant}
	color={color}
	className={className}
>
	{ text }
</Button>

export default SimpleButton
