import Link from "next/link";
import { ReactNode } from "react";

export default function NavOption({ isLogo=false,link, icon, selected=false }: { isLogo?: boolean, link: string, icon: ReactNode, selected?: boolean }) {
    return (
        <Link href={link} >
            <button className={`w-full flex justify-center items-center aspect-square ${selected && "bg-gray-200"} ${!isLogo && "hover:bg-gray-300"} smoothe rounded-xl`}>
                <div className="h-[30px]">
                    {icon}
                </div>
            </button>
        </Link>
    )
}