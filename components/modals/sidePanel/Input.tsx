import { ChangeEvent } from "react";

export default function Input({ title, name, placeholder, value, onChange }: { title: string, name: string, placeholder?: string, value?: string, onChange?: (value: string) => void }) {

    const handleChange = onChange && ((e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value!)
    })

    return (
        <div className="w-full flex items-center justify-between">
            <h1 className="text-base tracking-wide text-gray-800 font-medium">{title}</h1>
            <input name={name} value={value} onChange={handleChange} placeholder={placeholder} className="w-[300px] border-2 rounded-lg shadow p-[10px] outline-gray-500 smoothe text-sm" />
        </div>
    )
}