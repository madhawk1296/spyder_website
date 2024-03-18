'use client'

import { CreateCollectionContext } from "@/components/providers/CreateCollectionProvider"
import { useContext } from "react"

export default function CreateCollectionButton() {
    const { toggleMenu } = useContext(CreateCollectionContext)

    return (
        <button onClick={toggleMenu} className="text-xs text-gray-50 font-medium tracking-wide bg-red-400 hover:bg-red-500 hover:shadow-md shadow smoothe rounded-xl shadow px-[10px] py-[5px]">Add +</button>
    )
}