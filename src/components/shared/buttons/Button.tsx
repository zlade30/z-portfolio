type ButtonProps = {
    type?: 'fill' | 'outlined';
    text: string;
};

const Button = ({ type = 'fill', text }: ButtonProps) => {
    if (type === 'fill') {
        return <button className="border border-primary bg-primary text-white px-8 py-2 rounded-md">{text}</button>;
    } else {
        return <button className="border-2 border-primary text-primary px-8 py-2 rounded-md">{text}</button>;
    }
};

export default Button;
