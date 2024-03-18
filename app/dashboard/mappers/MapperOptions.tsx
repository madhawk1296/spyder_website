'use client'

import { usePathname } from "next/navigation";
import SubgraphOption from "./MapperOption";
import { MapperType } from "@/types/tables";
import MapperOption from "./MapperOption";

export default function MapperOptions({ mappers }: { mappers: MapperType[]}) {
    const pathname = usePathname()
    const current = Number(pathname.split("/")[3]) || null

    return (
        <div className="flex flex-col gap-2 py-[10px]">
            <h1 className="text-sm font-medium tracking-wide text-gray-800">Mappers({mappers.length})</h1>
            {mappers.length > 0 ? mappers.map((mapper, index) => <MapperOption key={index} mapper={mapper} selected={mapper.id == current} />) : (
                <div className="w-full shadow rounded-lg bg-gray-200 p-[10px]">
                    <h1 className="text-[11px] font-semibold text-gray-800 tracking-wide">No Mappers Available</h1>
                </div>
            )}
        </div>
    )
}