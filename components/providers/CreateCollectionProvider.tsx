'use client'

import { ReactNode, createContext, useState } from "react"
import CreateCollectionModal from "../modals/sidePanel/subgraph/CreateCollectionModal"
import { SubgraphType } from "@/types/subgraph"

export const CreateCollectionContext = createContext({
    menu: false,
    toggleMenu: () => {}
}) 

export default function CreateCollectionProvider({ children, schema, subgraph }: { children: ReactNode, schema: string, subgraph: SubgraphType }) {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <CreateCollectionContext.Provider value={{menu, toggleMenu}}>
            {children}
            <CreateCollectionModal schema={schema} subgraph={subgraph} />
        </CreateCollectionContext.Provider>
    )
}