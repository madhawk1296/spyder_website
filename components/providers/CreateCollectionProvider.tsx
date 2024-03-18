'use client'

import { ReactNode, createContext, useState } from "react"
import CreateCollectionModal from "../modals/sidePanel/CreateCollectionModal"

export const CreateCollectionContext = createContext({
    menu: false,
    toggleMenu: () => {}
}) 

export default function CreateCollectionProvider({ children, schema }: { children: ReactNode, schema: string}) {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <CreateCollectionContext.Provider value={{menu, toggleMenu}}>
            {children}
            <CreateCollectionModal schema={schema} />
        </CreateCollectionContext.Provider>
    )
}