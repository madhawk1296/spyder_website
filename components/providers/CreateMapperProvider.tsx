'use client'

import { ReactNode, createContext, useState } from "react"
import CreateMapperModal from "../modals/sidePanel/mapper/CreateMapperModal"
import { SubgraphType } from "@/types/subgraph"

export const CreateMapperContext = createContext({
    menu: false,
    toggleMenu: () => {}
}) 

export default function CreateMapperProvider({ children, subgraphs }: { children: ReactNode, subgraphs: SubgraphType[]}) {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <CreateMapperContext.Provider value={{menu, toggleMenu}}>
            {children}
            <CreateMapperModal subgraphs={subgraphs} />
        </CreateMapperContext.Provider>
    )
}