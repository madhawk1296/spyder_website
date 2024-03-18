import { SubgraphType } from "@/types/subgraph"

export default function SubgraphOption({ subgraph, index }: { subgraph: SubgraphType, index: number }) {
    const { name } = subgraph

    return (
        <option value={index} >{name}</option>
    )
}