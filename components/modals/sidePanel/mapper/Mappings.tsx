import { SubgraphType } from "@/types/subgraph";
import { EventType, MappingType } from "./CreateMapperModal";
import Mapping from "./Mapping";

export default function Mappings({ subgraph, events, mappings, addMapping, removeMapping }: { subgraph: SubgraphType, events: EventType[], mappings: (MappingType | null)[], addMapping: (index: number, mapping: MappingType) => void, removeMapping: (index: number) => void }) {    
    return (
        <div className="w-full flex flex-col gap-4">
            {events.map((event, index) => <Mapping key={index} index={index} event={event} subgraph={subgraph} mapping={mappings[index]} addMapping={addMapping} removeMapping={removeMapping}  />)}
        </div>
    )
}