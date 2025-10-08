import type React from "react";


interface LabelProps {
    htmlFor?: any,
    className?: any,
    text?: string,

}
export const Label: React.FC<LabelProps> = ({ htmlFor, className, text }) => {
    return (
        <>
            <div>
                <form>
                    <label
                        htmlFor={htmlFor}
                        className={`font-bold my-5  ${className || ""}`}
                    >
                        {text}
                    </label>
                </form>
            </div>

        </>
    )
}



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
    return (
        <input
            id={id}
            className={`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none
                 focus:ring-2 focus:ring-blue-500  my-2 ${className || ""}`}
            {...props}
        />
    );
};
