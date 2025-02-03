import React from 'react';

interface InputDateProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const InputDate: React.FC<InputDateProps> = ({ 
    label, value, onChange, className}) => {
    return (
        <div className={`input-date-container ${className}`}>
            <label className="input-date-label cd-pt-2 cd-block cd-text-lg cd-font-sans cd-font-medium ">{label}</label>
            <input
                type="date"
                value={value}
                onChange={onChange}
                className="input-date  cd-text-gray-900 dark:cd-text-gray-200 cd-font-sans cd-mt-1 cd-block cd-w-full cd-px-3 cd-py-2 dark:cd-bg-zinc-700 cd-border cd-border-gray-300 dark:cd-border-gray-500 cd-rounded-md cd-shadow-sm focus:cd-outline-none fous:cd-ring-indigo"
            />
        </div>
    )

};

export default InputDate;