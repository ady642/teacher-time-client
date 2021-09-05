import { MouseEvent } from "react";

export type ButtonProps = {
    children: JSX.Element | string;
    onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset'
}

