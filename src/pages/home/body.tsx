//import Input from '@components/form/Input';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import DataRepo from '@api/datasource';
import { EventByIdLoaderDataType } from '@customTypes/event';
import { isLoadingOrRefetchQuery } from '@utils/query';
import EventBalance from '@components/EventBalance';
import { QKeys } from '@constants/query';

//import moment from 'moment';

//import NumberInput from '@components/form/NumberInput';
//import Button from '@components/form/Button';


//import { set } from 'zod';

const Body = () => {
    //const [inputValue, setInputValue] = useState<string>('');
    const { id } = useParams<{ id: string }>();

    const eventQuery = useQuery<
        EventByIdLoaderDataType,
        Error,
        EventByIdLoaderDataType,
        [string, string | undefined]
    >({
        enabled: Boolean(id),
        queryKey: [QKeys.GET_EVENT_BY_INDEX, id],
        queryFn: async ({ queryKey }) => {
            return await DataRepo.loadEventById(queryKey[1]!)
        }
    })

    const { data } = eventQuery

    const isLoading = isLoadingOrRefetchQuery(eventQuery);

    return (
        <React.Fragment>



            {isLoading && (
                <p className='text-2xl cd-font-bold cd-text-center'>
                    Cargando Flujos...
                </p>
            )}

            {!isLoading && data?.event && (
                <EventBalance
                    //key={`${moment(data.event.date).year()}-${moment(data.event.date).month()}`}
                    key={`profile-${data.event.id}`}
                    data={data.event}
                />
            )}

            {!isLoading && !data?.event && (
                <div className='cd-flex cd-flex-col cd-items-center cd-justify-center cd-h-full cd-pt-56 cd-pb-80'>
                    <h1 className="cd-text-4xl cd-font-bold cd-text-center dark:cd-text-gray-300 ">
                        Empty virtual wallet
                    </h1>
                </div>
            )}
        </React.Fragment >


    );
};

export default Body;