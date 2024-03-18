'use client'

import kanit from "@/fonts/kanit";
import { ReactNode } from "react";

export default function Button({ title, color, icon, disabled=false, onClick }: { title: string, color: string, icon: ReactNode, disabled?: boolean, onClick: () => void}) {
    const handleClick = () => {
        onClick()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`min-w-[60px] aspect-square text-xs text-gray-600 tracking-wide rounded-lg shadow border-2 ${kanit.semiBold} ${color == "yellow" ? "border-yellow-300" : color == "red" ? "border-red-300" : "border-blue-300" } flex flex-col items-center justify-center ${disabled ? "bg-gray-200" : "" }`}>
            <div className="h-[25px]">
                {icon}
            </div>
            {title}
        </button>
    )
}