import Body from "./body";
import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DataRepo from "@api/datasource";
import { EventLoaderDataType, EventType } from "@customTypes/event";
import { QKeys } from "@constants/query";
import { useDebounce } from "@hooks/input";
import { usePagination } from "@hooks/pagination";
import { isLoadingOrRefetchQuery } from "@utils/query";
import EventBalance from "@components/EventBalance";
import { Pagination } from "@components/shared/Pagination";
import Input from "@components/form/Input";

import NumberInput from '@components/form/NumberInput';
import Button from '@components/form/Button';
const [inputValue, setInputValue] = useState<string>('');

const Home = () => {

    const { state } = useParams<{ state: string }>();

    const eventQuery = useQuery<
        EventLoaderDataType,
        Error,
        EventLoaderDataType,
        [string, string | undefined]
    >({
        queryKey: [QKeys.GET_EVENTS, state],
        queryFn: ({ queryKey }) => {
            return DataRepo.loadEvents(queryKey[1]);
        },
    });

    const { data } = eventQuery;

    const [query, debouncedQuery, setQuery, debouncing] = useDebounce<string>(
        '',
        1000
    )

    const filterEventCallBack = React.useCallback(filterEvents, [
        debouncedQuery,
        data?.events,
    ])

    const isLoading = isLoadingOrRefetchQuery(eventQuery);

    const { currentPage, pageData, totalPages, goToPage } =
        usePagination<EventType>({ data: filterEventCallBack() })

    return (

        <React.Fragment>
            
            {isLoading && (
                <p className="text-2xl font-bold cd-text-center">
                    Cargando Flujos
                </p>
            )}

            {!isLoading && data && (
                <div>
                    <div className="cd-flex cd-items-center cd-flex-col cd-gap-y-[2rem] cd-font-sans ">
                        <div className='cd-flex cd-items-end cd-justify-between cd-w-full' >
                            <div className='cd-flex cd-flex-row cd-items-end '>
                                <NumberInput
                                    className=""
                                    label="Dinero Inicial"
                                    value={parseFloat(inputValue)}
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
                    </div >

                    <div className="cd-p-20">

                        <Input label="Buscar flujo" value={query} onChange={setQuery} />

                        {debouncing && (
                            <p className="cd-text-lg cd-text-center">Buscando...</p>
                        )}

                        {!isLoading && !data?.events && (
                            <div className='cd-flex cd-flex-col cd-items-center cd-justify-center cd-h-full cd-pt-56 cd-pb-80'>
                                <h1 className="cd-text-4xl cd-font-bold cd-text-center dark:cd-text-gray-300 ">
                                    Empty virtual wallet
                                </h1>
                            </div>
                        )}

                        {!debouncing && (
                            <Pagination<EventType>
                                currentPage={currentPage}
                                data={pageData}
                                onChange={goToPage}
                                totalPages={totalPages}
                                renderItem={(event, index) => (
                                    <EventBalance key={event.id} data={event} index={index} />
                                )}
                            />
                        )}

                        <Body />
                    </div>

                </div>
            )}
        </React.Fragment>
    );

    function filterEvents(){
        if(!data?.events.length || !debouncedQuery){
            return data?.events;
        }
    
        return data.events.filter((event) =>
            event.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        )

    }

};

export default Home;