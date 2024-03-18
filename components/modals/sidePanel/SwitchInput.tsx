import { ChangeEvent } from "react";
import Switch from '@mui/material/Switch';

export default function SwitchInput({ title, value, onChange }: { title: string, value: boolean, onChange: (value: boolean) => void }) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };
    
    return (
        <div className="w-full flex items-center justify-between">
            <h1 className="text-base tracking-wide text-gray-800 font-medium">{title}</h1>
            <Switch checked={value} onChange={handleChange} />
        </div>
    )
}