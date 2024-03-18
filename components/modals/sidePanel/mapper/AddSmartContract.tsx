import { ChangeEvent, useState } from "react";
import Input from "../Input";
import { SmartContractType } from "./CreateMapperModal";

export default function AddSmartContract({ changeContract, removeContract }: { changeContract: (contract: SmartContractType) => void, removeContract: () => void}) {
    const [contractUploaded, setContractUploaded] = useState(false)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [abi, setAbi] = useState("")

    const toggleContractUploaded = () => {
        setContractUploaded(!contractUploaded)
    }

    const changeName = (value: string) => {
        setName(value)
    }

    const changeAddress = (value: string) => {
        setAddress(value)
    }

    const changeAbi = (value: string) => {
        setAbi(value)
    }

    const handleChangeContract = () => {
        const parsedAbi = JSON.parse(abi) as any[]

        changeContract({ name, address, abi: parsedAbi })
        toggleContractUploaded()
    }

    const handleRemoveContract = () => {
        changeName("")
        changeAddress("")
        changeAbi("")
        removeContract()
        toggleContractUploaded()
    }

    return !contractUploaded ? (
        <div className="w-full border-2 bg-gray-100 h-fit rounded-xl p-[20px] flex flex-col gap-4">     
            <h1 className="text-xl font-semibold text-gray-800 ">Add Smart Contract</h1>
            <Input title="Contract Name" name="contract_name" placeholder="contract_name" value={name} onChange={changeName} />
            <Input title="Contract Address" name="contract_address" placeholder="0x" value={address} onChange={changeAddress} />
            <Input title="Contract ABI" name="smart_name" placeholder="[]" value={abi} onChange={changeAbi} />
            <button type="button" onClick={handleChangeContract} className="flex self-end text-xs font-semibold bg-green-400 text-gray-50 tracking-wide py-[10px] px-[15px] rounded-lg shadow w-fit text-center smoothe hover:bg-green-500 hover:shadow-md" >Add</button>
        </div>
    ) : (
        <div className="w-full border-2 bg-gray-100 h-fit rounded-xl p-[20px] flex items-center justify-between gap-4">     
            <h1 className="text-xl font-semibold text-gray-800 ">Smart Contract Added</h1>
            <button type="button" onClick={handleRemoveContract} className="text-xs font-semibold bg-red-400 text-gray-50 tracking-wide py-[10px] px-[15px] rounded-lg shadow w-fit text-center smoothe hover:bg-red-500 hover:shadow-md" >Remove</button>
        </div>
    )
}