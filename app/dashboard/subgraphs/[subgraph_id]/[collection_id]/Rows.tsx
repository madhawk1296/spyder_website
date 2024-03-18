import getUser from "@/actions/getUser";
import { supabaseBrowserClient } from "@/clients/browser/supabase";
import { supabaseServerClient } from "@/clients/supabase";
import { getRows } from "@/tools/database"
import { Fragment, useEffect, useState } from "react"

export default function Rows({ subgraph, collection, columns, currentPage }: { subgraph: string, collection: string, columns: {column_name: string}[], currentPage: number }) {
    const [rows, setRows] = useState<{ column_name: string; }[]>([])

    const fetchRows = async () => {
        const user = await getUser()
        setRows(await getRows(user!.id, subgraph, collection, currentPage))
    }

    useEffect(() => {
        fetchRows()
    }, [currentPage])

    return (
        <div style={{gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`}} className={`w-fit flex flex-grow overflow-y-auto grid gap-[1px] bg-gray-300 border-b border-r border-gray-300`}>
            {rows.map((row, rowIndex) => (
                <Fragment key={rowIndex}>
                    {Object.entries(row).map(([key, value], colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className="h-[30px] flex items-center grid-cell bg-gray-50 overflow-hidden max-w-[200px] py-[3px] pl-[3px]">
                            <h1 className="text-xs font-medium tracking-wide text-gray-800 overflow-hidden whitespace-nowrap">{value}</h1>
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    )
}