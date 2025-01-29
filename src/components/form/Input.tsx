import React from 'react'

type InputProps = {
    label: string;
    //value: string;
    error?: string;
    className?: string;
    //onChange: (value: boolean) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        //const { label, value, error, onChange, className } = props;
        const { label, error, className } = props;
        return (
            <div className={className}>
                <label className="cd-block cd-text-lg cd-font-sans cd-font-medium">
                    {label}
                </label>
                <input
                    ref={ref}
                    type="text"
                    //value={value}
                    //onChange={(e) => onChange(e.target.checked)}
                    className="cd-mt-1 cd-block cd-w-full cd-px-3 cd-py-3 dark:cd-bg-zinc-700 cd-border cd-border-gray-300 dark:cd-border-gray-100 cd-rounded-md cd-shadow-sm focus:cd-outline-none fous:cd-ring-indigo"
                />
                {error && <p className="cd-mt-2 cd-text-sm cd-text-red-600">{error}</p>}
            </div>
        );
    });

export default Input;