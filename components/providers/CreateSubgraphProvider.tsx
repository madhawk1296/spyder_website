'use client'

import { ReactNode, createContext, useState } from "react"
import CreateSubgraphModal from "../modals/sidePanel/CreateSubgraphModal"

export const CreateSubgraphContext = createContext({
    menu: false,
    toggleMenu: () => {}
}) 

export default function CreateSubgraphProvider({ children }: { children: ReactNode}) {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <CreateSubgraphContext.Provider value={{menu, toggleMenu}}>
            {children}
            <CreateSubgraphModal />
        </CreateSubgraphContext.Provider>
    )
}