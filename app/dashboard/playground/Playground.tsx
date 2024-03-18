'use client'

import { GraphiQLProvider, QueryEditor } from "@graphiql/react";
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import Sidebar from "./Sidebar";
import Box from "./Box";
import { SubgraphType } from "@/types/subgraph";
import 'graphiql/graphiql.css';
import { useState } from "react";
import Response from "./Response";

export default function Playground({ userId, subgraphs }: { userId: string, subgraphs: SubgraphType[] }) {
    const [subgraph, setSubgraph] = useState(subgraphs[0])

    const changeSubgraph = (value: SubgraphType) => {
        setSubgraph(value)
    }

    const fetcher = createGraphiQLFetcher({
        url: `https://api.spidey.dev/${userId}/${subgraph.name}`,
    });

    return (
        <GraphiQLProvider fetcher={fetcher} >
            <div className="w-full h-full relative flex">
                <Sidebar subgraph={subgraph} changeSubgraph={changeSubgraph} subgraphs={subgraphs} />
                <div className="w-full h-full p-[15px] bg-gray-100 flex gap-4">
                    <Box />
                    <Response />
                </div>
            </div>
        </GraphiQLProvider>
    )
}