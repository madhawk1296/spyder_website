'use client'

import { usePathname } from "next/navigation";
import SubgraphOption from "./SubgraphOption";

export default function SubgraphOptions({ subgraphs }: { subgraphs: {schema_name: string}[]}) {
    const pathname = usePathname()
    const currentSubgraph = pathname.split("/")[3] || null

    return (
        <div className="flex flex-col gap-2 py-[10px]">
            <h1 className="text-sm font-medium tracking-wide text-gray-800">Subgraphs({subgraphs.length})</h1>
            {subgraphs.length > 0 ? subgraphs.map((subgraph, index) => <SubgraphOption key={index} subgraph={subgraph} selected={subgraph.schema_name == currentSubgraph} />) : (
                <div className="w-full shadow rounded-lg bg-gray-200 p-[10px]">
                    <h1 className="text-[11px] font-semibold text-gray-800 tracking-wide">No Subgraphs Available</h1>
                </div>
            )}
        </div>
    )
}