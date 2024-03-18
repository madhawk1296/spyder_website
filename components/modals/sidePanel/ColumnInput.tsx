import { ChangeEvent } from "react"

export default function ColumnInput({ value, placeholder, onChange }: { value: string, placeholder?: string, onChange: (value: string) => void}) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    return (
        <div className="min-w-[25%]">
            <input onChange={handleChange} className="w-full border-2 rounded-lg shadow outline-gray-500 text-xs px-[10px] py-[5px]" placeholder={placeholder} value={value} />
        </div>
    )
}