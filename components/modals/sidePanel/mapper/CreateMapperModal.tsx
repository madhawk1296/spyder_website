'use client';

import { useContext, useEffect, useState } from "react"
import { CreateMapperContext } from "../../../providers/CreateMapperProvider"
import Input from "../Input"
import Button from "../Button"
import { useRouter } from "next/navigation";
import AddSmartContract from "./AddSmartContract";
import ChooseEvents from "./ChooseEvents";
import MapEvents from "./MapEvents";
import SubgraphInput from "./SubgraphInput";
import { SubgraphType } from "@/types/subgraph";
import createMapper from "@/actions/createMapper";
import SwitchInput from "../SwitchInput";

export type SmartContractType = {
    name: string,
    address: string,
    abi: any[]
}

export type EventType = {
    name: string,
    inputs: any[]
}

export type MappingType = {
    collection: string,
    collectionColumns: string[],
    inputColumns: string[],
    event: string
}

export default function CreateMapperModal({ subgraphs }: { subgraphs: SubgraphType[]}) {
    const router = useRouter()
    const { menu, toggleMenu } = useContext(CreateMapperContext)
    const [runForever, setRunForever] = useState(true)
    const [subgraph, setSubgraph] = useState<SubgraphType>(subgraphs[0])
    const [contract, setContract] = useState<SmartContractType | null>(null)
    const [events, setEvents] = useState<EventType[]>([])
    const [mappings, setMappings] = useState<(MappingType | null)[]>([])

    useEffect(() => {
        setMappings(events.map(() => null))
    }, [events])

    const changeRunForever = (value: boolean) => {
        setRunForever(value)
    }

    const changeSubgraph = (value: SubgraphType) => {
        setSubgraph(value)
    }

    const changeContract = (contract: SmartContractType) => {
        setContract(contract)
    }

    const removeContract = () => {
        setContract(null)
    }

    const changeEvents = (events: EventType[]) => {
        setEvents(events)
    }

    const removeEvents = () => {
        setEvents([])
    }

    const addMapping = (index: number, newMapping: MappingType) => {
        setMappings(mappings.map((mapping, i) => i == index ? newMapping : mapping))
    }

    const removeMapping = (index: number) => {
        setMappings(mappings.map((mapping, i) => i == index ? null : mapping))
    }

    const handleAction = async (formData: FormData) => {
        formData.set("run_forever", String(runForever))
        console.log(subgraph)
        formData.set("subgraph", subgraph.name)
        formData.set("contract_abi", JSON.stringify(contract!.abi))
        formData.set("contract_name", contract!.name)
        formData.set("contract_address", contract!.address)
        formData.set("mappings", JSON.stringify(mappings))

        const { data, error } = await createMapper(formData)
        console.log(error)
        router.refresh()
      }

    return (
        <div className={`fixed left-0 top-0 h-screen w-screen pointer-events-none`}>
            <div onClick={toggleMenu} className={`w-full h-full bg-white smoothe ${menu ? "pointer-events-auto opacity-70" : "opacity-0"}`} />
            <form action={handleAction} className={`bg-gray-50 pointer-events-auto absolute top-0 right-0 h-full w-[800px] bg-white shadow smoothe flex flex-col gap-2 border-l-2 shadow ${!menu && "translate-x-full"}`}>
                <h1 className="px-[20px] text-2xl tracking-wide text-gray-800 font-semibold py-[7px] border-b-2">Create Mapper</h1>
                <div className="flex flex-grow flex-col overflow-scroll">
                    <div className="flex flex-col gap-4 p-[20px]">
                        <Input title="Name" name="name" placeholder="name" />
                        <Input title="Starting Block" name="starting_block" placeholder="0" />
                        <SwitchInput title="Run Forever" value={runForever} onChange={changeRunForever}  />
                        {!runForever && <Input title="Ending Block" name="ending_block" placeholder="999" /> }
                        <SubgraphInput title="Subgraph" options={subgraphs} onChange={changeSubgraph} />
                        <div className="border w-full "/>
                        <AddSmartContract changeContract={changeContract} removeContract={removeContract} />
                        <ChooseEvents contract={contract} changeEvents={changeEvents} removeEvents={removeEvents} />
                        <MapEvents subgraph={subgraph} events={events} mappings={mappings} addMapping={addMapping} removeMapping={removeMapping} />
                    </div>
                </div>
                <div className="flex flex-shrink min-h-[80px] w-full border-t-2 justify-end items-center gap-4 px-[20px]">
                    <Button title="Cancel" color="gray" onClick={toggleMenu} />
                    <Button title="Save" isSubmit />
                </div>
            </form>
        </div>
    )
}