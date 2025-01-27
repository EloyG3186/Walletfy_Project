//import Input from '@components/form/Input';
import NumberInput from '@components/form/NumberInput';
import Button from '@components/form/Button';
import { useState } from 'react';

const Body = () => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <div className="cd-flex cd-items-center cd-flex-col cd-gap-y-[4rem] cd-border cd-border-gray-300 cd-rounded-md cd-p-5 cd-bg-gray-200 cd-bg-orange-200 cd-font-sans ">

            <div className='cd-bg-slate-800 cd-flex cd-items-center' >
                <div className='cd-flex cd-flex-row cd-items-end cd-bg-white'>
                    <NumberInput
                        label="Dinero Inicial"
                        value={inputValue}
                        onChange={() => { }}
                    />
                    <Button caption="Calcular" />
                </div>

                <a
                    href="/events/form"
                    className="cd-bg-blue-500 cd-text-white cd-p-2 cd-rounded-md hover:cd-bg-blue-700">
                    Add Event
                </a>
                
            </div>

            <div className='cd-bg-gray-100'>
                <div className="cd-flex cd-flex-row cd-text-center cd-gap-y-[1rem]">
                    <h1 className="cd-text-4xl cd-font-bold cd-text-center cd-mt-9">Bienvenido!</h1>
                </div>
            </div>
        </div >
    );
};

export default Body;