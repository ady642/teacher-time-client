import { MouseEvent } from "react";

export type ButtonProps = {
    onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    outlined?: boolean;
    size?: 'small' | 'medium' | 'large';
}

