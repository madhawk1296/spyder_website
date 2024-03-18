'use client' 

import Create from "@/components/icons/Create";
import DashboardContainer from "../DashboardContainer";
import { ReactNode, useContext } from "react";
import Link from "next/link";
import SubgraphOptions from "./SubgraphOptions";
import { CreateSubgraphContext } from "@/components/providers/CreateSubgraphProvider";
import kanit from "@/fonts/kanit";

export default function Subgraphs({ children, subgraphs, limitReached=false }: { children: ReactNode, subgraphs: {schema_name: string}[], limitReached?: boolean }) {
    const { menu, toggleMenu } = useContext(CreateSubgraphContext)

    return (
        <DashboardContainer>
            <div className="w-full h-full relative flex">
                <div className="min-w-[250px] w-[250px] h-full border-r-2 flex flex-col gap-4">
                    <h1 className="text-2xl font-medium text-gray-800 tracking-wide px-[15px] py-[10px] border-b">Subgraphs</h1>
                    <div className="flex flex-col gap-4 px-[15px]">
                        <div className="flex flex-col gap-2">
                            <button onClick={toggleMenu} disabled={limitReached} className="text-left w-full bg-red-400 px-[10px] py-[5px] shadow-md rounded-lg text-gray-50 font-semibold tracking-wide text-xs hover:shadow-lg hover:bg-red-500 smoothe flex items-center gap-1 disabled:bg-red-300">
                                <div className="h-[15px]">
                                    <Create />
                                </div>
                                Create Subgraph
                            </button>
                            {limitReached && <h1 className={`text-center text-sm text-gray-700 tracking-wide ${kanit.medium}`}>Subgraph limit reached.<br/><Link className={`text-blue-500 underline ${kanit.semiBold}`} href="/dashboard/user/plans">Upgrade plan</Link> to increase limit.</h1>}
                        </div>
                        <SubgraphOptions subgraphs={subgraphs}  />
                    </div>
                </div>
                {children}
            </div>
        </DashboardContainer>
    )
}