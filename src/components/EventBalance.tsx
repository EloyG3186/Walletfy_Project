import moment from "moment"
import { $ } from "@utils/styles";
import { EventType, MONTHS } from "@customTypes/event"

//import DataRepo from "@api/datasource";

type EventBalanceProps = {
    data: EventType;
    index?: number;
    children?: React.ReactNode;
}

const EventBalance = (props: EventBalanceProps) => {

    const { index, data, children } = props

    const { id, name, description, date, amount, type, attachment } = data;

    return (

        <article className={$("cd-basis-full sm:cd-basis-1/3 ",
            "md:cd-basis-1/3 lg:cd-basis-1/3 cd-p-[0.5rem]")}>
            <div className={$("cd-p-[1rem] cd-text-center cd-justify-center cd-items-center ",
                "cd-flex cd-flex-col cd-gap-y-[1rem] cd-shadow-lg cd-rounded-md ",
                "cd-border cd-border-gray-200")}>
                <div className="cd-border cd-bottom-2">
                    <h1>{`Id: ${id}`}</h1>
                    <h1>{`Name: ${name}`}</h1>
                    <h1>{`Description: ${description}`}</h1>
                    <h1>{`Date: ${moment.unix(date).format('DD/MM/YYYY')}`}</h1>
                    <h1>{`Amount: ${amount}`}</h1>
                    <h1>{`type: ${type}`}</h1>
                    <h1>{`attachment: ${attachment}`}</h1>
                </div>
            </div>

            <div>
                {children}
            </div>
        </article>

    )

}

export default EventBalance;