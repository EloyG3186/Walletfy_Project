import React, {useState} from 'react'

type InputProps = {
    label: string;
    value: string;
    error?: string;
    className?: string;
    onChange: (value: boolean) => void;
}

const NumberInput = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const { label, error, className } = props;

        const [value, setValue] = useState<string>('');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value;
          if (/^\d*\.?\d*$/.test(newValue) && parseFloat(newValue) > 0) {
            setValue(newValue);
          }
        };

        return (
            <div className={className}>
                <label className="cd-block cd-text-sm cd-font-medium cd-text-gray-700">
                    {label}
                </label>
                <input
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    className="cd-mt-1 cd-block cd-w-full cd-px-3 cd-py-2 cd-border cd-border-gray-300 cd-rounded-md cd-shadow-sm focus:cd-outline-none fous:cd-ring-indigo"
                />
                {error && <p className="cd-mt-2 cd-text-sm cd-text-red-600">{error}</p>}
            </div>
        );
    });

export default NumberInput;