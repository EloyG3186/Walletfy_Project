import React from 'react';

interface InputDateProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const InputDate: React.FC<InputDateProps> = ({ label, value, onChange, className }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`input-date-container ${className}`}>
            <label className="input-date-label">{label}</label>
            <input
                type="date"
                value={value}
                onChange={handleChange}
                className="input-date"
            />
        </div>
    );
};

export default InputDate;