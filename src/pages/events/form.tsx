import { useState } from 'react';
import { createEvent, Event } from '@models/Event'; // MODELS
import Input from '@components/form/Input';
import InputDate from '@components/form/InputDate';
import NumberInput from '@components/form/NumberInput';
import SelectInput from '@components/form/Select';
import Attachment from '@components/form/Attachment';


//import Button from '@components/form/Button';


//EventForm maneja el formulario y lógica para crear nuevos eventos
// USE STATE= para manejar el estado de los campos del formulario.
const EventForm = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<'income' | 'expense'>('income');
    const [date, setDate] = useState<string>('');
    const [attachment, setAttachment] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [events, setEvents] = useState<Event[]>([]);


    //handleSubmit se encarga de crear un nuevo evento con los valores actuales de los campos del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newEvent: Event = createEvent(name, amount, type, date, description, attachment);
            setEvents([...events, newEvent]);
            console.log('Event created:', newEvent);
            // Reset form fields
            setName('');
            setDescription('');
            setAmount(0);
            setType('income');
            setDate('');
            setAttachment('');
            setError(null);
        } catch (error) {
            setError((error as Error).message);
            console.error('Error creating event:', error);
        }
    };





    return (
        <section className="cd-w-full">

            <main className="cd-flex cd-transition-colors cd-duration-500  dark:cd-bg-zinc-900 cd-flex-col cd-items-center cd-w-full cd-pt-5 cd-pb-14 cd-justify-center">
                <div className=" cd-px-10  cd-mt-[2rem] cd-flex cd-flex-col cd-transition-colors cd-duration-500 ">
                    <form className='cd-flex cd-flex-col cd-text-lg  dark:cd-text-white' onSubmit={handleSubmit}>


                        <h1 className='cd-pb-8'>Create Event</h1>
                        {error && <p className="cd-text-red-500">{error}</p>}
                        <div>
                            <Input
                                className='cd-py-1'
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>

                        <div className='cd-py-1'>
                            <Input
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}

                            />
                        </div>

                        <div className='cd-py-1'>
                            <InputDate
                                label="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}

                            />
                        </div>

                        <div className='cd-py-1 '>
                            <NumberInput
                                label="Amount"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value))}

                            />
                        </div>

                        <div className='cd-py-1 '>
                            <SelectInput
                                label="Type"
                                value={type}
                                options={['income', 'expense']}
                                onChange={(e) => setType(e.target.value as 'income' | 'expense')}

                            />
                        </div>

                        <div className='cd-py-1'>
                            <Attachment
                                label="Attachment"
                                value={attachment}
                                onChange={(e) => setAttachment(e.target.value)}
                            />
                        </div>

                        <button className='cd-self-center cd-mt-4 cd-font-medium cd-text-lg  cd-font-sans cd-px-80 cd-py-4 cd-bg-violet-500 cd-text-white cd-rounded-md hover:cd-bg-violet-600'>
                            Submit
                        </button>
                    </form>
                    <div className="cd-mt-8">
                        <h2 className="cd-text-xl dark:cd-text-gray-300 cd-font-bold">Created Events</h2>
                        <ul className="cd-text-gray-800 dark:cd-text-gray-300">
                            {events.map((event) => (
                                <li key={event.id}>
                                    <p>ID: {event.id}</p>
                                    <p>Name: {event.name}</p>
                                    <p>Description: {event.description}</p>
                                    <p>Amount: {event.amount}</p>
                                    <p>Type: {event.type}</p>
                                    <p>Date: {event.date}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div >
            </main>

        </section>

    );
};

export default EventForm;