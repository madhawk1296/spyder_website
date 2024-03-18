import { SubgraphType } from "@/types/subgraph";
import Subgraphs from "./Subgraphs";
import { DocExplorer } from "@graphiql/react";

export default function Sidebar({ subgraph, subgraphs, changeSubgraph }: { subgraph: SubgraphType, subgraphs: SubgraphType[], changeSubgraph: (value: SubgraphType) => void }) {

    return (
        <div className="w-[700px] h-full border-r-2 flex flex-col gap-10 bg-white px-[15px]">
            <h1 className="text-2xl font-medium text-gray-800 tracking-wide py-[10px] border-b">Playground</h1>
            <Subgraphs currentSubgraph={subgraph} subgraphs={subgraphs} changeSubgraph={changeSubgraph} />
            <div className="graphiql-container">
                <div className="graphiql-plugin">
                    <DocExplorer />
                </div>
            </div>
        </div>
    )
}