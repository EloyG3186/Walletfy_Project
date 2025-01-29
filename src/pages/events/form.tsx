import { useState } from 'react';
import Input from '@components/form/Input';
import InputDate from '@components/form/InputDate';
import NumberInput from '@components/form/NumberInput';
import SelectInput from '@components/form/Select';
import Attachment from '@components/form/Attachment';
//import Button from '@components/form/Button';


const EventForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    /*
        const handleInputChange = (value: string) => {
            setInputValue(value);
        };*/

    return (
        <section className="cd-w-full">

           <main className="cd-flex cd-flex-col cd-items-center cd-w-full cd-pt-5 cd-pb-14 cd-justify-center">
                <div className=" cd-px-10  cd-mt-[2rem] cd-flex cd-flex-col dark:cd-bg-zinc-800 ">
                    <form className='cd-flex cd-flex-col cd-text-lg  dark:cd-text-white '>


                        <h1 className='cd-pb-8'>Create Event</h1>
                        <div>
                            <Input
                                label="Name"
                                //value={inputValue}
                                //onChange={() => {  }}
                            />
                        </div>

                        <div className='cd-py-1'>
                            <Input
                                label="Description"
                                //value={inputValue}
                                //onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-py-1'>
                            <InputDate
                                label="Date"
                                //value={inputValue}
                               //onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-py-1 '>
                            <NumberInput
                                label="Amount"
                                //value={inputValue}
                                //onChange={() => { setInputValue }}
                            />
                        </div>

                        <div className='cd-py-1 '>
                            <SelectInput
                                label="Type"
                                //value={inputValue}
                                options={['income', 'expense']}
                                //onChange={() => { setInputValue }}
                            />
                        </div>
                      
                      <div className='cd-py-1'>
                        <Attachment
                            label="Attachment"
                        />
                        </div>

                        <button className='cd-self-center cd-mt-4 cd-font-medium cd-text-lg  cd-font-sans cd-px-80 cd-py-4 cd-bg-violet-500 cd-text-white cd-rounded-md hover:cd-bg-violet-600'>
                        Submit
                        </button>
                        
                      
                    </form>
                </div >
            </main>

        </section>

    );
};

export default EventForm;