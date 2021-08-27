export type ButtonProps = {
    children: JSX.Element | string;
    onClick: (e?: Event) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset'
}

