'use client';

import { useContext, useState } from "react"
import { CreateCollectionContext } from "../../providers/CreateCollectionProvider"
import Input from "./Input"
import Button from "./Button"
import addCollection from "@/actions/addCollection"
import { useRouter } from "next/navigation";
import ColumnTitle from "./ColumnTitle";
import Column from "./Column";

export type ColumnType = {
    name: string,
    type: string,
    defaultValue: string,
    primary: boolean
}

export default function CreateCollectionModal({ schema }: { schema: string }) {
    const router = useRouter()
    const { menu, toggleMenu } = useContext(CreateCollectionContext)
    const [columns, setColumns] = useState<ColumnType[]>([])

    const addColumn = () => {
        setColumns([...columns, {name: "", type: "", defaultValue: "", primary: false}])
    }

    const changeColumn = (index: number, column: ColumnType) => {
        setColumns(currentColumns => {
            const newColumns = [...currentColumns];
            newColumns[index] = column;
            return newColumns;
        });
    }

    const handleAction = async (formData: FormData) => {
        columns.forEach(column => {
            formData.append("columns", JSON.stringify(column))
        })

        await addCollection(formData)
        router.refresh()
        toggleMenu()
    }


    return (
        <div className={`fixed left-0 top-0 h-screen w-screen pointer-events-none`}>
            <div onClick={toggleMenu} className={`w-full h-full bg-white smoothe ${menu ? "pointer-events-auto opacity-70" : "opacity-0"}`} />
            <form action={handleAction} className={`bg-gray-50 pointer-events-auto absolute top-0 right-0 h-full w-[800px] bg-white shadow smoothe flex flex-col gap-2 border-l-2 shadow ${!menu && "translate-x-full"}`}>
                <h1 className="px-[20px] text-2xl tracking-wide text-gray-800 font-semibold py-[7px] border-b-2">Create Collection</h1>
                <div className="flex flex-grow flex-col overflow-scroll">
                    <div className="flex flex-col gap-4 p-[20px]">
                        <input name="schema" hidden value={schema} />
                        <Input title="Name" name="name" placeholder="collection_name" />
                    </div>
                    <div className="border w-full "/>
                    <div className="flex flex-col w-full p-[20px] gap-3 w-full ">
                        <div className="flex items-center w-full">
                            <h1 className="font-medium tracking-wide text-gray-800">Columns</h1>
                        </div>
                        <div className="flex items-center w-full gap-2">
                            <ColumnTitle title="Name" />
                            <ColumnTitle title="Type" />
                            <ColumnTitle title="Default Value" />
                            <ColumnTitle title="Primary" />
                        </div>
                        <div className="flex flex-col w-full relative gap-2">
                            {columns.map((column, index) => <Column key={index} index={index} column={column} changeColumn={changeColumn} />)}
                        </div>
                        <button onClick={addColumn} type="button" className="w-fit px-[10px] py-[5px] border-2 shadow text-xs rounded-lg shadow" >Add Column</button>
                    </div>
                </div>
                <div className="flex flex-shrink min-h-[80px] w-full border-t-2 justify-end items-center gap-4 px-[20px]">
                    <Button title="Cancel" color="gray" />
                    <Button title="Save" />
                </div>
            </form>
        </div>
    )
}