import { useState } from "react";
import { EventType, SmartContractType } from "./CreateMapperModal";
import Event from "./Event";
import Events from "./Events";

export default function ChooseEvents({ contract, changeEvents, removeEvents }: { contract: SmartContractType | null, changeEvents: (events: EventType[]) => void, removeEvents: () => void}) {
    const structuredEvents = contract?.abi.filter(i => i.type == "event").map(event => {
        return {
            name: event.name, 
            inputs: event.inputs,
            chosen: false
        }
    })!

    const [eventsChosen, setEventsChosen] = useState(false)

    const toggleEventsChosen = () => {
        setEventsChosen(!eventsChosen)
    }

    const handleChooseEvents = (events: EventType[]) => {
        changeEvents(events)
        toggleEventsChosen()
    }

    const handleRemoveEvents = () => {
        removeEvents()
        toggleEventsChosen()
    }



    return !eventsChosen ? (
        <div className="w-full border-2 bg-gray-100 h-fit rounded-xl p-[20px] flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-gray-800 ">Choose Events</h1>
            {contract && <Events structuredEvents={structuredEvents} handleChooseEvents={handleChooseEvents}  />}
        </div>
    ) : (
        <div className="w-full border-2 bg-gray-100 h-fit rounded-xl p-[20px] flex items-center justify-between gap-4">     
            <h1 className="text-xl font-semibold text-gray-800 ">Events Chosen</h1>
            <button type="button" onClick={handleRemoveEvents} className="text-xs font-semibold bg-red-400 text-gray-50 tracking-wide py-[10px] px-[15px] rounded-lg shadow w-fit text-center smoothe hover:bg-red-500 hover:shadow-md" >Remove</button>
        </div>
    )
}