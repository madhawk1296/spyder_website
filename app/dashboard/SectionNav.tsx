import Create from "@/components/icons/Create";
import Link from "next/link";
import { ReactNode, useContext } from "react";
import SubgraphOptions from "./subgraphs/SubgraphOptions";
import { CreateMapperContext } from "@/components/providers/CreateMapperProvider";
import kanit from "@/fonts/kanit";

export default function SectionNav({ children, title, createTitle, createAction, options, limitReached }: { children: ReactNode, title: string, createTitle: string, createAction: () => void, options: ReactNode, limitReached: boolean }) {
    const { toggleMenu } = useContext(CreateMapperContext)

    return (
        <div className="w-full h-full relative flex">
            <div className="min-w-[250px] w-[250px] h-full border-r-2 flex flex-col gap-4">
                <h1 className="text-2xl font-medium text-gray-800 tracking-wide px-[15px] py-[10px] border-b">{title}</h1>
                <div className="flex flex-col gap-4 px-[15px]">
                    <div className="flex flex-col gap-2">
                        <button disabled={limitReached} onClick={toggleMenu} className="text-left w-full bg-red-400 px-[10px] py-[5px] shadow-md rounded-lg text-gray-50 font-semibold tracking-wide text-xs hover:shadow-lg hover:bg-red-500 smoothe flex items-center gap-1 disabled:bg-red-300">
                            <div className="h-[15px]">
                                <Create />
                            </div>
                            {createTitle}
                        </button>
                        {limitReached && <h1 className={`text-center text-sm text-gray-700 tracking-wide ${kanit.medium}`}>Mapper limit reached.<br/><Link className={`text-blue-500 underline ${kanit.semiBold}`} href="/dashboard/user/plans">Upgrade plan</Link> to increase limit.</h1>}
                    </div>
                    {options}
                </div>
            </div>
            {children}
        </div>
    )
}