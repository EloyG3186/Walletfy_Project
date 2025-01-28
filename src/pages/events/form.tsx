import { useState } from 'react';
import Input from '@components/form/Input';
import InputDate from '@components/form/InputDate';
import NumberInput from '@components/form/NumberInput';
import SelectInput from '@components/form/Select';
import Attachment from '@components/form/Attachment';
import Button from '@components/form/Button';
import Header from '@pages/home/header';

const EventForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    /*
        const handleInputChange = (value: string) => {
            setInputValue(value);
        };*/

    return (
        <section className="cd-w-full">

            <header>
                <Header />
            </header>


            <main className="cd-flex cd-flex-col cd-items-center cd-w-full cd-p-20 cd-justify-center">
                <div className="cd-bg-gray-100 cd-px-10 cd-py-5 cd-mt-[2rem] cd-flex cd-flex-col">
                    <form className=' cd-items-center'>

                        <h1 className='cd-text-lg cd-text-black cd-py-4 '>Create Event</h1>
                        <div>
                            <Input
                                label="Name"
                                value={inputValue}
                                onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-text-lg cd-text-black cd-py-4'>
                            <Input
                                label="Description"
                                value={inputValue}
                                onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-text-lg cd-text-black cd-py-4'>
                            <InputDate
                                label="Date"
                                value={inputValue}
                                onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-text-lg cd-text-black cd-py-4 '>
                            <NumberInput
                                label="Amount"
                                value={inputValue}
                                onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-text-lg cd-text-black cd-py-4 '>
                            <SelectInput
                                label="Type"
                                value={inputValue}
                                options={['income', 'expense']}
                                onChange={() => { setInputValue }}
                            />
                        </div>
                      
                      <div className='cd-text-lg cd-text-black cd-py-4'>
                        <Attachment
                            label="Attachment"
                        />
                        </div>

                        <button className=' cd-self-center cd-mt-4 cd-font-medium cd-text-lg  cd-font-sans cd-px-80 cd-py-4 cd-bg-violet-500 cd-text-white cd-rounded-md hover:cd-bg-violet-600'>
                        Submit
                        </button>
                        
                      
                    </form>
                </div >
            </main>

        </section>

    );
};

export default EventForm;