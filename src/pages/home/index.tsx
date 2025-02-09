import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DataRepo from "@api/datasource";
import { EventLoaderDataType, EventFlow, EventType, MONTHS } from "@customTypes/event";
import { QKeys } from "@constants/query";
import { isLoadingOrRefetchQuery } from "@utils/query";
import NumberInput from '@components/form/NumberInput';
import Button from '@components/form/Button';
import moment from 'moment';


const INITIAL_FLOWS = {
    initialMoney: 0,
    flows: []
}

const Home = () => {

    const { state } = useParams<{ state: string }>();
    const [inputValue, setInputValue] = useState(0);
    const [eventsFlow, setEventsFlow] = useState<EventFlow>(INITIAL_FLOWS);

    const eventQuery = useQuery<
        EventLoaderDataType,
        Error,
        EventLoaderDataType,
        [string, string | undefined]
    >({
        queryKey: [QKeys.GET_EVENTS, state],
        queryFn: ({ queryKey }) => {
            return DataRepo.loadEvents(queryKey[0]);
        },
    });


    const addEventToFlow = (id: string, event: EventType) => {
        setEventsFlow(prevEventsFlow => {

            if (prevEventsFlow.flows.some(flow => flow.id === id)) {
                return {
                    ...prevEventsFlow,
                    flows: prevEventsFlow.flows.map(flow => {
                        if (flow.id === id) {
                            const updatedIncome = event.type === 'income' ? flow.income + event.amount : flow.income;
                            const updatedExpense = event.type === 'expense' ? flow.expense + event.amount : flow.expense;
                            const updateMonthly = updatedIncome - updatedExpense

                            return {
                                ...flow,
                                events: [...flow.events, event],
                                income: updatedIncome,
                                expense: updatedExpense,
                                monthly: updatedIncome - updatedExpense,
                                global: updateMonthly + prevEventsFlow.initialMoney,
                            };
                        }
                        return flow;
                    }),
                };
            } else {
                const newIncome = event.type === 'income' ? event.amount : 0;
                const newExpense = event.type === 'expense' ? event.amount : 0;
                const newGlobal = newIncome - newExpense;
                return {
                    ...prevEventsFlow,
                    flows: [
                        ...prevEventsFlow.flows, {
                            id,
                            events: [event],
                            income: newIncome,
                            expense: newExpense,
                            monthly: newIncome - newExpense,
                            global: newGlobal + prevEventsFlow.initialMoney,
                        }]
                };
            }
        });
    };

    const processEvents = (events: EventType[]) => {
        setEventsFlow(INITIAL_FLOWS);
        events.forEach(event => {
            const id = moment.unix(event.date).format('YYYY-MM');
            addEventToFlow(id, event);
        })

        sortEventsFlow();
    }

    const sortEventsFlow = () => {
        setEventsFlow(prevEventsFlow => {
            return {
                ...prevEventsFlow,
                flows: [...prevEventsFlow.flows].sort((a, b) => a.id.localeCompare(b.id)),
            }
        });
    };

    const editEvent = (id: string) => {
        const eventToEdit = eventsFlow.flows.flatMap(flow => flow.events).find(event => event.id === id)
        if (eventToEdit) {


            console.log('Editando evenro: ', eventToEdit);


            const updatedEvent = { ...eventToEdit, name }
        }


    }


    useEffect(() => {
        if (eventQuery.data?.events) {
            processEvents(eventQuery.data.events);
        }
    }, [eventQuery.data]);

    /*
        useEffect(() => {
            sortEventsFlow();
        }, [eventsFlow])*/

    const { data } = eventQuery;
    const isLoading = isLoadingOrRefetchQuery(eventQuery);

    console.log(eventsFlow)

    return (
        <div className="">
            <React.Fragment>
                {isLoading && (
                    <p className="cd-py-52 cd-text-2xl cd-text-zinc-800 dark:cd-text-gray-300 cd-font-bold cd-font-sans cd-text-center">
                        Loading your events...
                    </p>

                )}

                {!isLoading && data && (
                    <div className="cd-m-20 ">
                        <div className="cd-flex cd-justify-items-start cd-gap-y-[2rem] cd-font-sans ">
                            <div className='cd-flex cd-items-end cd-justify-between cd-w-full' >
                                <div className='cd-flex cd-flex-row cd-items-end '>
                                    <NumberInput
                                        className=""
                                        label="Dinero Inicial"
                                        value={inputValue}
                                        onChange={setInputValue}
                                    />
                                    <Button
                                        caption="Calcular"
                                        onClick={() => eventsFlow.initialMoney = inputValue}
                                    />
                                </div>
                                <a
                                    href="/events/form"
                                    className="cd-bg-violet-500 cd-text-white cd-text-lg cd-font-medium cd-px-7 cd-py-3 cd-rounded-md hover:cd-bg-violet-700">
                                    Add Event
                                </a>
                            </div>
                        </div >

                        {!isLoading && data?.events && data.events.length > 0 && (

                            <div className='cd-flex cd-flex-col cd-gap-4 dark:cd-text-white cd-pt-8'>
                                <p className='cd-mb-2 cd-self-start cd-font-sans cd-font-medium cd-text-xl '>Your Events</p>
                                <div className='cd-flex cd-flex-row cd-gap-4'>
                                    {eventsFlow.flows.map(flow => {
                                        const month = parseInt(flow.id.substring(5, 7), 10);
                                        return (
                                            <div key={flow.id}
                                                className='cd-flex cd-rounded-xl cd-px-8 cd-py-2 cd-flex-col cd-bg-gray-100 dark:cd-bg-zinc-700 dark:cd-border dark:cd-border-gray-600 cd-shadow-2xl'>
                                               
                                                <section className="cd-flex cd-justify-between cd-items-center cd-px-[4rem] cd-py-[0.5rem]">
                                                   
                                                    <h2 className='cd-justify-center cd-text-center cd-text-xl cd-py-2 cd-text-zinc-800 cd-font-sans dark:cd-text-gray-300 cd-font-semibold'>
                                                        {MONTHS[month - 1]} {flow.id.slice(0, 4)}</h2>

                                                </section>

                                                <div className="cd-border-b cd-border-gray-200  dark:cd-border-zinc-500"></div>

                                                <section>
                                                    {flow.events.map(event => (
                                                        <div
                                                            key={event.id}
                                                            className='cd-p-2 cd-rounded hover:cd-bg-slate-400 cd-transition-colors '
                                                            onClick={() => editEvent(event.id)}>

                                                            <div className='cd-flex cd-justify-between cd-items-center'>
                                                                <div className="cd-flex cd-flex-col cd-font-sans cd-text-gray-300 cd-text-lg">
                                                                    <span className=" cd-text-gray-700 dark:cd-text-gray-200 ">{event.name}</span>
                                                                    <span className='cd-pb-4 cd-text-gray-700 dark:cd-text-gray-200 '>{moment.unix(event.date).format('YYYY-MM-DD')}</span>
                                                                </div>
                                                                <div className='cd-text-right cd-flex cd-items-center'>
                                                                    <p className={`${event.type === 'income' ? 'cd-text-green-600' : 'cd-text-red-300'} cd-text-lg cd-text-right`}>${event.amount.toFixed(2)}</p>
                                                                </div>

                                                            </div>
                                                            <div className="cd-border-b cd-border-gray-200 cd-w-full cd-h-[1px] cd-mb-[0.5rem] dark:cd-border-zinc-500"></div>

                                                        </div>

                                                    ))}
                                                </section>


                                                <footer className='cd-flex cd-flex-col cd-gap-y-[0.1rem] cd-pb-2'>

                                                    <div className='cd-px-[1rem] cd-pb-[1rem]'>

                                                        <div className='cd-flex cd-text-lg cd-flex-row cd-justify-between'>
                                                            <strong>Income:  </strong>
                                                            <p>
                                                                ${flow.income.toFixed(2)}
                                                            </p>
                                                        </div>

                                                        <div className='cd-flex cd-text-lg cd-flex-row cd-justify-between'>
                                                            <strong>Expenses:  </strong>
                                                            <p>
                                                                ${flow.expense.toFixed(2)}
                                                            </p>
                                                        </div>

                                                        <div className='cd-flex cd-text-lg cd-flex-row cd-justify-between'>
                                                            <strong>Monthly:  </strong>
                                                            <p >
                                                                ${flow.monthly.toFixed(2)}
                                                            </p>
                                                        </div>

                                                        <div className='cd-flex cd-text-lg cd-flex-row cd-justify-between'>
                                                            <strong>Global:  </strong>
                                                            <p >
                                                                ${flow.global.toFixed(2)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        )}


                        <div className="cd-p-20">
                            {!isLoading && !data?.events && (
                                <div className='cd-flex cd-flex-col cd-items-center cd-justify-center cd-h-full cd-pt-56 cd-pb-80'>
                                    <h1 className="cd-text-4xl cd-font-bold cd-text-center dark:cd-text-gray-300 ">
                                        Empty virtual wallet
                                    </h1>
                                </div>
                            )}
                        </div>

                    </div>
                )}


            </React.Fragment>


        </div>
    );

};



export default Home;