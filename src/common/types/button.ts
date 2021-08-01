export type ButtonProps = {
    children: JSX.Element | string;
    onClick: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset'
}

