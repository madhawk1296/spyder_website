import { useState } from "react"
import Event from "./Event"
import { EventType } from "./CreateMapperModal"

export default function Events({ structuredEvents, handleChooseEvents }: { structuredEvents: {name: string, chosen: boolean, inputs: any[]}[], handleChooseEvents: (events: EventType[]) => void}) {
    const [events, setEvents] = useState(structuredEvents)

    const toggleChooseEvent = (index: number) => {
        const newEvents = [...events]
        newEvents[index] = {...newEvents[index], chosen: !newEvents[index].chosen}
        setEvents(newEvents)
    }

    const handleSubmit = () => {
        const chosenEvents = events.filter(event => event.chosen).map(event => {return {name: event.name, inputs: event.inputs}})
        handleChooseEvents(chosenEvents)
    }

    return (
        <div className="w-full flex flex-col gap-3">
            {events.map((event, index) => <Event key={index} index={index} event={event} toggleChooseEvent={toggleChooseEvent} />)}
            <button type="button" onClick={handleSubmit} className="flex self-end text-xs font-semibold bg-green-400 text-gray-50 tracking-wide py-[10px] px-[15px] rounded-lg shadow w-fit text-center smoothe hover:bg-green-500 hover:shadow-md" >Choose Events</button>
        </div>  
    )
}