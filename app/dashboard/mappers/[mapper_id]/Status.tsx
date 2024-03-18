'use client'

import Gear from "@/components/icons/Gear";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Action from "./Action";

export default function Status({ status }: { status: "ACTIVE" | "INACTIVE"}) {
    const actions = ["Start", "Restart", "Stop"]
    const [menu, setMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(menuRef.current && buttonRef.current) {
                if (!menuRef.current.contains(event.target as Node) && buttonRef.current !== event.target && !buttonRef.current.contains(event.target as Node)) {
                    setMenu(false)
                }
            }
        }

        // Add when the component is mounted
        document.addEventListener("mousedown", handleClickOutside as unknown as EventListener);
        // Remove event listener on cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside as unknown as EventListener);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className="flex justify-between items-center">
            <h1 className="text-sm text-gray-800 font-medium tracking-wide">Status</h1>
            <div className="flex gap-2 items-center">
                <h1 className={`text-sm px-[10px] rounded-lg ${status == "ACTIVE" ? "text-green-500" : "text-red-500"} font-semibold tracking-wide `}>{status == "ACTIVE" ? "Running" : "Stopped"}</h1>
                <div className="w-fit h-fit relative">
                    <button ref={buttonRef} onClick={toggleMenu} className={`p-[5px] rounded-lg shadow border-2 h-[32px] relative ${menu && "bg-gray-100"} smoothe-fast`}>
                        <Gear />
                    </button>
                    {menu && (
                            <div ref={menuRef} className="absolute -right-[10px] translate-x-full -translate-y-1/2 w-fit h-fit bg-gray-200 border-2 rounded-lg shadow flex flex-col gap-[2px] overflow-hidden">
                                {actions.map(action => <Action action={action} />)}
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}