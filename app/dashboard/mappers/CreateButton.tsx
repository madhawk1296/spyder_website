'use client'

import { CreateMapperContext } from "@/components/providers/CreateMapperProvider"
import { useContext } from "react"

export default function CreateButton({ disabled }: { disabled: boolean}) {
    const { menu, toggleMenu } = useContext(CreateMapperContext)

    return (
        <button onClick={toggleMenu} disabled={disabled} className="mt-[10px] w-fit px-[15px] py-[10px] rounded-lg shadow bg-red-500 text-sm text-gray-50 font-semibold smoothe hover:bg-red-600 hover:shadow-md disabled:bg-red-300 ">Create a Mapper</button>
    )
}