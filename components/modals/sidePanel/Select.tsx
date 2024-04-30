import { ChangeEvent } from "react";

export default function Select({ title, name, value, options, onChange }: { title: string, name: string, value?: string, options: {name: string, title: string}[], onChange?: (value: string) => void }) {

    const handleChange = onChange && ((e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value!)
    })

    return (
        <div className="w-full flex items-center justify-between">
            <h1 className="text-base tracking-wide text-gray-800 font-medium">{title}</h1>
            <select name={name} value={value} onChange={handleChange} className="w-[300px] border-2 rounded-lg shadow p-[10px] outline-gray-500 smoothe text-sm">
                {options.map((option, key) => <option key={key} value={option.name}>{option.title}</option>)}
            </select>
        </div>
    )
}