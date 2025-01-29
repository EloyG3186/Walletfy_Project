import React from 'react';

interface InputDateProps {
    label: string;
    //value: string;
    //onChange: (value: string) => void;
    className?: string;
}

const InputDate: React.FC<InputDateProps> = ({ 
    //label, value, onChange, className
    label, className
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //onChange(e.target.value);
    };

    return (
        <div className={`input-date-container ${className}`}>
            <label className="input-date-label cd-pt-2 cd-block cd-text-lg cd-font-sans cd-font-medium ">{label}</label>
            <input
                type="date"
                //value={value}
                //onChange={handleChange}
                className="input-date cd-mt-1 cd-block cd-w-full cd-px-3 cd-py-2 dark:cd-bg-zinc-700 cd-border cd-border-gray-300 dark:cd-border-gray-100 cd-rounded-md cd-shadow-sm focus:cd-outline-none fous:cd-ring-indigo"
            />
        </div>
    );
};

export default InputDate;