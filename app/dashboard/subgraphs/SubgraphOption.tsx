import Link from "next/link";

export default function SubgraphOption({ subgraph, selected }: { subgraph: {schema_name: string}, selected: boolean }) {
    const { schema_name } = subgraph
    return (
        <Link href={`/dashboard/subgraphs/${schema_name}`} >
            <button className={`text-left text-xs w-full smoothe ${selected ? "bg-gray-200" : "bg-gray-100"} rounded-md shadow-md py-[5px] px-[10px] tracking-wide text-gray-800 font-medium `} >{schema_name}</button>
        </Link>
    )
}