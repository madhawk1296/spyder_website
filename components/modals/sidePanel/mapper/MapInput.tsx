import { ChangeEvent } from "react"

export default function MapInput({ title, options, value, index, changeInput }: { title: string, options: string[], index: number, value: string, changeInput: (index: number, value: string) => void}) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeInput(index, e.target.value)
    }

    return (
        <div className="w-full flex justify-between items-center border rounded-xl">
            <h1 className="text-xs px-[10px] py-[5px]">{title}</h1>
            <select onChange={handleChange} value={value} className="text-xs outline-gray-500 tracking-wide rounded-lg bg-gray-200 px-[10px] py-[5px]">
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </div>
    )
}