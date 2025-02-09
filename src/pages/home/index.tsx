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
        if(eventToEdit){


            console.log('Editando evenro: ', eventToEdit);


        const updatedEvent = {...eventToEdit, name}
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
        <div>
            <React.Fragment>
                {isLoading && (
                    <p className="text-2xl font-bold cd-text-center">
                        Cargando Flujos
                    </p>

                )}

                {!isLoading && data && (
                    <div className="cd-m-12 ">
                        <div className="cd-flex cd-items-center cd-flex-col cd-gap-y-[2rem] cd-font-sans ">
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
                            <div className='cd-flex cd-flex-row cd-justify-center  dark: cd-text-white'>
                                {eventsFlow.flows.map(flow => {
                                    const month = parseInt(flow.id.substring(5, 7), 10);
                                    return (
                                        <div
                                            key={flow.id}
                                            className='cd-flex cd-flex-col cd-mb-4 cd-border cd-border-gray-200'

                                        >
                                            <h2 className='cd-justify-center cd-text-center cd-tex-2xl cd-font-bold'>
                                                {MONTHS[month - 1]} - {flow.id.slice(0, 4)}

                                            </h2>
                                            {flow.events.map(event => (
                                                <div
                                                    key={event.id}
                                                    className='cd-mb-2 cd-p-2 cd-border cd-border-gray-300 cd-rounded hover:cd-bg-slate-300'
                                                    onClick={() => editEvent(event.id)}
                                                >
                                                    <p><strong>Nombre:</strong> {event.name}</p>
                                                    <p><strong>Fecha:</strong> {moment.unix(event.date).format('YYYY-MM-DD')}</p>
                                                    <p><strong>Monto:</strong> <p className={`${event.type === 'income' ? 'cd-text-green-600' : 'cd-text-red-600'} cd-text-right`}>${event.amount.toFixed(2)}</p>

                                                    </p>
                                                </div>
                                            ))
                                            }

                                            <div className='cd-text-right'>
                                                <p><strong>Income:  </strong>${flow.income.toFixed(2)}</p>
                                                <p><strong>Expenses:  </strong>${flow.expense.toFixed(2)}</p>
                                                <p><strong>Monthly:  </strong><p className={`${flow.monthly > 0 ? 'cd-text-green-600' : 'cd-text-red-600'}`}>${flow.monthly.toFixed(2)}</p></p>
                                                <p><strong>Global:  </strong><p className={`${flow.global > 0 ? 'cd-text-green-600' : 'cd-text-red-600'}`}>${flow.global.toFixed(2)}</p></p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        )
                        }
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