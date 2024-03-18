import Link from "next/link";
import CreateCollectionButton from "./CreateCollectionButton";
import Collection from "./Collection";

export default async function Subgraph({ subgraph, tables }: { subgraph: string, tables: {table_name: string}[] }) {
    return (
        <div className="w-full h-full flex flex-col px-[15px] gap-8">
            <h1 className="py-[10px] text-xl tracking-wide font-semibold text-gray-800">{subgraph}</h1>
            <div className="w-full  flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg text-gray-700 tracking-wide font-medium">Collections({tables.length})</h1>
                    <CreateCollectionButton />
                </div>
                <div className="border rounded-xl w-full border-gray-500"></div>
                <div className="flex flex-col gap-2">
                    {tables.map((table, index) => <Collection key={index} schema={subgraph} table={table} />)}
                </div>
            </div>
        </div>
    )
}