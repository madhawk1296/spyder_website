import Link from "next/link";

export default function Collection({ schema, table }: { schema: string, table: {table_name: string}}) {
    const { table_name } = table; 
    
    return (
        <Link href={`/dashboard/subgraphs/${schema}/${table_name}`}>
            <div className="w-full p-[20px] border-2 rounded-xl flex items-center">
                <h1 className="text-sm text-gray-800 tracking-wide font-medium">{table_name}</h1>
            </div>
        </Link>
    )
}