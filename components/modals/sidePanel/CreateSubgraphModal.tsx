'use client';

import { useContext, useState } from "react"
import { CreateSubgraphContext } from "../../providers/CreateSubgraphProvider"
import Input from "./Input"
import Button from "./Button"
import createSubgraph from "@/actions/createSubgraph"
import { useRouter } from "next/navigation";
import ColumnTitle from "./ColumnTitle";
import Column from "./Column";

export default function CreateSubgraphModal() {
    const router = useRouter()
    const { menu, toggleMenu } = useContext(CreateSubgraphContext)

    const handleAction = async (formData: FormData) => {
        const { error } = await createSubgraph(formData)

        if (error) {
            router.refresh()
        }
        toggleMenu()
    }


    return (
        <div className={`fixed left-0 top-0 h-screen w-screen pointer-events-none`}>
            <div onClick={toggleMenu} className={`w-full h-full bg-white smoothe ${menu ? "pointer-events-auto opacity-70" : "opacity-0"}`} />
            <form action={handleAction} className={`bg-gray-50 pointer-events-auto absolute top-0 right-0 h-full w-[800px] bg-white shadow smoothe flex flex-col gap-2 border-l-2 shadow ${!menu && "translate-x-full"}`}>
                <h1 className="px-[20px] text-2xl tracking-wide text-gray-800 font-semibold py-[7px] border-b-2">Create Subgraph</h1>
                <div className="flex flex-grow flex-col overflow-scroll">
                    <div className="flex flex-col gap-4 p-[20px]">
                        <Input title="Name" name="name" placeholder="new_subgraph" />
                        <Input title="Description" name="description" placeholder="Optional" />
                    </div>
                    <div className="border w-full "/>
                </div>
                <div className="flex flex-shrink min-h-[80px] w-full border-t-2 justify-end items-center gap-4 px-[20px]">
                    <Button onClick={toggleMenu} title="Cancel" color="gray" />
                    <Button isSubmit title="Save" />
                </div>
            </form>
        </div>
    )
}