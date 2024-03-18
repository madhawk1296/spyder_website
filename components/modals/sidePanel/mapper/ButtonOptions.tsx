import { ChangeEvent } from "react";
import ButtonOption from "./ButtonOption";

export default function ButtonOptions({ value, onChange, options }: { value: string, onChange: (value: string) => void, options: string[]}) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }

    return (
        <select value={value} onChange={handleChange} className="bg-gray-300 outline-none border border-gray-500 rounded-lg py-[5px]">
            {options.map((option, index) => <ButtonOption key={index} title={option} />)}
        </select>
    )
}