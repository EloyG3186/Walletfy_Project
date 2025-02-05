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
                    <h1>{MONTHS[moment(date).month()] + " " + moment(date).year() }</h1>
                </div>
            </div>

            <div>
                {children}
            </div>
        </article>

    )

}

export default EventBalance;