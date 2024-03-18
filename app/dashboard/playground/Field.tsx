import kanit from "@/fonts/kanit";
import { CollectionType } from "@/types/subgraph";
import Column from "./Column";

export default function Field({ field }: { field: CollectionType }) {
    const { name, columns } = field
    return (
        <div className={`flex flex-col gap-2 text-sm tracking-wide ${kanit.medium}`}>
            <h1 className=""><span className="text-blue-500">{name}</span> (</h1>
            <div className="flex flex-col gap-2 px-[15px]">
                {columns.map(column => <Column column={column.name} />)}
            </div>
            )
        </div>
    )
}