import { useState } from "react";
import { EventType, MappingType, SmartContractType } from "./CreateMapperModal";
import Event from "./Event";
import Events from "./Events";
import Mappings from "./Mappings";
import { SubgraphType } from "@/types/subgraph";

export default function MapEvents({ subgraph, events, mappings, addMapping, removeMapping }: { subgraph: SubgraphType, events: EventType[], mappings: (MappingType | null)[], addMapping: (index: number, mapping: MappingType) => void, removeMapping: (index: number) => void}) {
    const [mappingsChosen, setMappingsChosen] = useState(false)

    const toggleMappingsChosen = () => {
        setMappingsChosen(!mappingsChosen)
    }

    return !mappingsChosen ? (
        <div className="w-full border-2 bg-gray-100 h-fit rounded-xl p-[20px] flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-gray-800 ">Map Events to Subgraph</h1>
            {events.length > 0 && <Mappings subgraph={subgraph} events={events} mappings={mappings} addMapping={addMapping} removeMapping={removeMapping} />}
        </div>
    ) : (
        <div className="w-full border-2 bg-gray-100 h-fit rounded-xl p-[20px] flex items-center justify-between gap-4">     
            <h1 className="text-xl font-semibold text-gray-800 ">Events Mapped</h1>
            <button type="button" className="text-xs font-semibold bg-red-400 text-gray-50 tracking-wide py-[10px] px-[15px] rounded-lg shadow w-fit text-center smoothe hover:bg-red-500 hover:shadow-md" >Remove</button>
        </div>
    )
}