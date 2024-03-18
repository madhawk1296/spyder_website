import { ChangeEvent } from "react";
import { on } from "stream";
import SubgraphOption from "./SubgraphOption";
import { SubgraphType } from "@/types/subgraph";

export default function SubgraphInput({ title, onChange, options }: { title: string, placeholder?: string, value?: string, onChange: (value: SubgraphType) => void, options: SubgraphType[] }) {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const index = Number(e.target.value)
        onChange(options[index])
    }

    return (
        <div className="w-full flex items-center justify-between">
            <h1 className="text-base tracking-wide text-gray-800 font-medium">{title}</h1>
            <select onChange={handleChange} className="w-[300px] border-2 rounded-lg shadow p-[10px] outline-gray-500 smoothe text-sm" >
                {options.map((option, index) => <SubgraphOption key={index} index={index} subgraph={option} />)}
            </select>
        </div>
    )
}