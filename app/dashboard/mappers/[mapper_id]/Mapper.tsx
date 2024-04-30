import Gear from "@/components/icons/Gear";
import { ChainType, MapperType } from "@/types/tables";
import Detail from "./Detail";
import Status from "./Status";
import Sync from "./Sync";


export default function Mapper({ mapper, latestBlock }: { mapper: MapperType, latestBlock: number }) {
    const { name, status, current_block, run_forever, ending_block, id, chain } = mapper

    return (
        <div className="w-full h-full flex flex-col px-[15px] gap-8 bg-gray-100">
            <h1 className="py-[10px] text-xl tracking-wide font-semibold text-gray-800">{name}</h1>
            <Sync currentBlock={current_block!} latestBlock={latestBlock} status={status as "ACTIVE" | "INACTIVE"} mapperId={id} />
            <div className="self-center w-[800px] rounded-xl border-2 shadow p-[20px] flex flex-col gap-6 bg-white">
                <Detail title="Name" value={name} />
                <Detail title="Chain" value={(chain as unknown as ChainType).title} />
                <Detail title="Smart Contract" value="Magic" />
                <Detail title="Starting Block" value="0" />
                <Detail title="Ending Block" value="Run forever" />
            </div>
        </div>
    )
}