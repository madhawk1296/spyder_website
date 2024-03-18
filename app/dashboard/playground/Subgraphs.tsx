import kanit from "@/fonts/kanit";
import { SubgraphType } from "@/types/subgraph";
import { ChangeEvent } from "react";

export default function Subgraphs({ currentSubgraph, subgraphs, changeSubgraph }: { currentSubgraph: SubgraphType, subgraphs: SubgraphType[], changeSubgraph: (value: SubgraphType) => void }) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newSubgraph = subgraphs.find(subgraph => subgraph.name == e.target.value)!

        changeSubgraph(newSubgraph)
    }

    return (
        <div className="flex flex-col gap-2 ">
            <h1 className={`text-center text-sm ${kanit.medium} text-gray-800 tracking-wide`}>Choose subgraph</h1>
            <select onChange={handleChange} value={currentSubgraph.name} className="w-full p-[5px] border-2 rounded-xl text-sm outline-gray-500 text-gray-800 tracking-wide">
                {subgraphs.map(subgraph => <option value={subgraph.name}>{subgraph.name}</option>)}
            </select>
        </div>
    )
}