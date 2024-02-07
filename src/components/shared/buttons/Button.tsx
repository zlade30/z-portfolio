import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    type?: 'fill' | 'outlined';
    text: string;
    className?: string;
};

const Button = ({ type = 'fill', text, className }: ButtonProps) => {
    if (type === 'fill') {
        return (
            <button
                className={twMerge(
                    'border-2 border-primary bg-primary text-white px-8 py-2 rounded-md hover:bg-hover hover:border-hover',
                    className
                )}
            >
                {text}
            </button>
        );
    } else {
        return (
            <button
                className={twMerge(
                    'border-2 border-primary text-primary px-8 py-2 rounded-md hover:border-hover hover:text-hover',
                    className
                )}
            >
                {text}
            </button>
        );
    }
};

export default Button;
