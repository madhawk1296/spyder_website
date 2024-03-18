import { MapperType } from "@/types/tables";
import Link from "next/link";

export default function MapperOption({ mapper, selected }: { mapper: MapperType, selected: boolean }) {
    const { id, name } = mapper
    return (
        <Link href={`/dashboard/mappers/${id}`} >
            <button className={`text-left text-xs w-full smoothe ${selected ? "bg-gray-200" : "bg-gray-100"} rounded-md shadow-md py-[5px] px-[10px] tracking-wide text-gray-800 font-medium `} >{name}</button>
        </Link>
    )
}