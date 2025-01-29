import React, {useState} from 'react'

type InputProps = {
    label: string;
    value?: string;
    error?: string;
    className?: string;
    onChange?: (value: boolean) => void;
}

const NumberInput = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const { label, error, className, } = props;

        const [value, setValue] = useState<string>('');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value;
          if (/^\d*\.?\d*$/.test(newValue) && parseFloat(newValue) > 0) {
            setValue(newValue);
          }
        };

        return (
            <div className={className}>
                <label className="cd-block cd-text-lg cd-pt-2 cd-font-sans cd-font-medium cd-text-gray-800 dark:cd-text-gray-100">
                    {label}
                </label>
                <input
                    ref={ref}
                    type="number"
                    //value={value}
                    //onChange={(e) => handleChange(e)}
                    className="cd-mt-1 cd-block cd-w-full dark:cd-text-gray-300 cd-px-7 cd-py-2 dark:cd-bg-zinc-700 cd-border cd-border-gray-300 dark:cd-border-gray-100 cd-rounded-md cd-shadow-sm focus:cd-outline-none fous:cd-ring-indigo"
                />
                {error && <p className="cd-mt-2 cd-text-sm cd-text-red-600">{error}</p>}
            </div>
        );
    });

export default NumberInput;