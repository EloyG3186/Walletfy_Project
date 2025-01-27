//import Input from '@components/form/Input';
import NumberInput from '@components/form/NumberInput';
import Button from '@components/form/Button';
import { useState } from 'react';

const Body = () => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <div className="cd-flex cd-items-center cd-flex-col cd-gap-y-[15rem] cd-font-sans ">

                <div className='cd-flex cd-items-end cd-justify-between cd-w-full' >
                    <div className='cd-flex cd-flex-row cd-items-end '>
                        <NumberInput
                            className=""
                            label="Dinero Inicial"
                            value={inputValue}
                            onChange={() => { }}
                        />
                        <Button caption="Calcular" />
                    </div>

                    <a  
                        href="/events/form"
                        className="cd-bg-violet-500 cd-text-white cd-text-lg cd-font-medium cd-px-7 cd-py-3 cd-rounded-md hover:cd-bg-violet-700">
                        Add Event
                    </a>
                </div>
           

            <div className=''>
                <div className="cd-flex cd-flex-row cd-text-center cd-gap-y-[2rem] ">
                    <h1 className="cd-text-4xl cd-font-bold cd-text-center ">Bienvenido!!</h1>
                </div>
            </div>
        </div >
    );
};

export default Body;