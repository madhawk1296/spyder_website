import { ChangeEvent } from "react";
import ColumnTypeOption from "./ColumnTypeOption";

export default function ColumnSelect({ value, options, onChange }: { value: string, options: { name: string }[], onChange: (value: string) => void}) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className="min-w-[25%]">
            <select onChange={handleChange} value={value} className="w-full border-2 rounded-lg shadow outline-gray-500 text-xs px-[10px] py-[5px]">
                {options.map((option, index) => <ColumnTypeOption key={index} option={option} />)}
            </select>
        </div>
    )
}