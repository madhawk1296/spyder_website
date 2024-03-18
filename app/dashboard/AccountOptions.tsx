'use client'

import User from "@/components/icons/User";
import kanit from "@/fonts/kanit";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { supabaseBrowserClient } from "@/clients/browser/supabase";
import logout from "@/actions/logout";
import AccountOption from "./AccountOption";
import Link from "next/link";

export default function AccountOptions() {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null);
    router.prefetch("/dashboard/user/plans")



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

    const handleLogout = async () => {
        try {
            const { error } = await logout();
            router.refresh()
        } catch(e) {
            console.log(e)
        }
    }

    const handlePlans = () => {
        router.push("/dashboard/user/plans")
        toggleMenu()
    }

    
    return (
        <div className="relative">
            <button ref={buttonRef} onClick={toggleMenu} className={`w-full flex justify-center items-center aspect-square smoothe rounded-xl hover:bg-gray-300`}>
                <div className="h-[25px]">
                    <User />
                </div>
            </button>
            {menu && (
                <div ref={menuRef} className="flex flex-col gap-[2px] bg-gray-300 border-gray-300 w-[100px] absolute bottom-0 border-2 overflow-hidden left-full translate-x-[3px] shadow rounded-lg z-10">
                    <AccountOption title="Plans" handleClick={handlePlans} />  
                    <AccountOption title="Logout" handleClick={handleLogout} />
                </div> 
            )}
        </div>
    )
}