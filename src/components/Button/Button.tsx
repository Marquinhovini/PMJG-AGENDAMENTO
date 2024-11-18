import { MyButton } from './styles';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

function Button({ label, onClick, className }: ButtonProps) {
    return (
        <MyButton onClick={onClick} className={className}>
            {label}
        </MyButton>
    );
}

export default Button;
