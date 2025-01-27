import { useState } from 'react';
import Input from '@components/form/Input';
import InputDate from '@components/form/InputDate';
import NumberInput from '@components/form/NumberInput';
import SelectInput from '@components/form/Select';
import Attachment from '@components/form/Attachment';
import Button from '@components/form/Button';


const EventForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    /*
        const handleInputChange = (value: string) => {
            setInputValue(value);
        };*/

    return (
        <div className="cd-flex cd-flex-col cd-items-center cd-gap-4 cd-justify-center cd-bg-slate-50">
            <h1>Eventos</h1>
            <Input
                label="Name"
                value={inputValue}
                onChange={() => { setInputValue }}
            />
            <Input
                label="Description"
                value={inputValue}
                onChange={() => { setInputValue }}
            />

            <InputDate
                label="Date"
                value={inputValue}
                onChange={() => { setInputValue }}
            />

            <NumberInput
                label="Amount"
                value={inputValue}
                onChange={() => { setInputValue }}
            />

              <SelectInput
                label="Role"
                value={inputValue}
                options={['income', 'expense']}
                onChange={() => { setInputValue }}  
              />

              <Attachment />

                <Button
                    caption="Submit"
                />

        </div>
    );
}

export default EventForm;