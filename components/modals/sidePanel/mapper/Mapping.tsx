import { SubgraphType } from "@/types/subgraph"
import { ChangeEvent, useEffect, useState } from "react"
import { EventType, MappingType } from "./CreateMapperModal"
import MapInput from "./MapInput"
import kanit from "@/fonts/kanit"

export default function Mapping({ index, mapping, event, subgraph, addMapping, removeMapping }: { index: number, mapping: MappingType | null, event: EventType, subgraph: SubgraphType, addMapping: (index: number, mapping: MappingType) => void, removeMapping: (index: number) => void}) {
    const { collections } = subgraph
    const inputOptions = ["event_id", ...event.inputs.map(input => input.name)]
    const [menu, setMenu] = useState(true)
    const [currentCollection, setCurrentCollection] = useState(collections[0])
    const [inputs, setInputs] = useState<string[]>(event.inputs.map(() => inputOptions[0]))

    useEffect(() => {
        setCurrentCollection(subgraph.collections[0])
    }, [subgraph])

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const changeCollection = (e: ChangeEvent<HTMLSelectElement>) => {
        const collection = subgraph.collections.find(collection => collection.name == e.target.value)!
        setCurrentCollection(collection)
    }

    const changeInput = (index: number, value: string) => {
        setInputs(inputs => inputs.map((input, i) => i === index ? value : input))
    }

    const handleSave = () => {
        const newMapping: MappingType = { 
            event: event.name, 
            collection: currentCollection.name, 
            collectionColumns: currentCollection.columns.map(column => column.name), 
            inputColumns: inputs
        }

        addMapping(index, newMapping)
        toggleMenu()
    }

    const handleRemove = () => {
        removeMapping(index)
        toggleMenu()
    }

    return menu ? (
        <div className="w-full border-2 bg-gray-50 rounded-xl py-[15px] px-[15px] flex flex-col gap-4">
            <h1 className={`${kanit.semiBold} tracking-wide text-gray-800`}>{event.name}</h1>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b-2 pb-[2px]">
                    <select onChange={changeCollection} className={`text-sm ${kanit.medium} tracking-wide text-gray-800 outline-none border-2 rounded-lg p-[3px]`} >
                        {collections.map((collection, index) => <option key={index} value={collection.name}>{collection.name}</option>)}
                    </select>
                    <h1 className={`text-sm ${kanit.medium} tracking-wide text-gray-800`}>Events</h1>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {currentCollection.columns.map((column, index) => <MapInput key={index} title={column.name} options={inputOptions} index={index} changeInput={changeInput} value={inputs[index]} />)}
                </div>
            </div>
            <button onClick={handleSave} className="self-end w-fit px-[10px] py-[5px] bg-blue-400 rounded-lg text-xs tracking-wide text-gray-50" >Save</button>
        </div>
    ) : (
        <div className="w-full border-2 bg-gray-50 rounded-xl py-[15px] px-[15px] flex items-center justify-between">
            <h1 className={`${kanit.semiBold} tracking-wide text-gray-800`}>{event.name} <span className="text-gray-600">- saved</span></h1>
            <button onClick={handleRemove} className={`text-xs px-[15px] py-[10px] smoothe rounded-lg shadow bg-red-400 hover:bg-red-500 text-gray-50 ${kanit.semiBold} tracking-wide`}>Remove</button>
        </div>
    )
}