//import Input from '@components/form/Input';
import NumberInput from '@components/form/NumberInput';
import { useState } from 'react';

const Body = () => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <div className="cd-flex cd-items-center cd-flex-col cd-gap-y-[4rem]">
            <h1 className="cd-text-4xl cd-font-bold cd-text-center cd-mt-9">Bienvenido!</h1>
            <div className="cd-flex cd-flex-row cd-text-center cd-gap-y-[1rem]">
                <NumberInput
                    label="Dinero Inicial"
                    value={inputValue}
                    onChange={() => { alert(inputValue) }}
                />
                <button
                    className="cd-px-4 cd-py-2 cd-ml-6 cd-text-white cd-bg-blue-500 cd-rounded-md hover:cd-bg-blue-700"
                    type="submit"
                >
                    Calcular
                </button>
            </div>
        </div>
    );
};

export default Body;