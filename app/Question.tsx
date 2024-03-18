'use client'

import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import kanit from "@/fonts/kanit";
import { useState } from "react";

export default function Question({ title, answer }: { title: string, answer: string }) {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className="w-full h-fit bg-gray-50 shadow rounded-lg flex flex-col smoothe">
            <button onClick={toggleMenu} className="p-[20px] w-full h-fit flex items-center gap-8">
                <div className="w-[25px]">
                    {menu ? <Minus /> : <Plus />}
                </div>
                <h1 className={`${kanit.semiBold} text-xl tracking-wide text-gray-700`}>{title}</h1>
            </button>
            <h1 className={`smoothe ml-[57px] px-[20px]  ${menu ? "h-fit pb-[20px]" : "h-[0]"} text-lg ${kanit.light} text-gray-700 tracking-wide overflow-hidden`}>
                {answer}
            </h1>
        </div>
    )
}