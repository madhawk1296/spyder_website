'use client'

import Web from "@/components/icons/Web";
import NavOption from "./NavOption";
import Home from "@/components/icons/Home";
import { usePathname } from "next/navigation";
import Spidey from "@/components/logos/Spidey";
import Map from "@/components/icons/Map";
import AccountOptions from "./AccountOptions";
import CurlyBraces from "@/components/icons/CurlyBraces";

export default function Nav() {
    const pathname = usePathname()
    const section = (pathname.split("/")[2] || "home") as "home" | "subgraphs" | "mappers" | "playground"

    return (
        <div className="h-full max-w-[57px] min-w-[57px] border-r flex flex-col justify-between gap-2 px-[5px] py-[5px]">
            <div className="flex flex-col gap-2">
                <NavOption isLogo={true} link="/dashboard" icon={<Spidey />} />
                <NavOption link="/dashboard" icon={<Home />} selected={section == "home"} />
                <NavOption link="/dashboard/subgraphs" icon={<Web />} selected={section == "subgraphs"} />
                <NavOption link="/dashboard/mappers" icon={<Map />} selected={section == "mappers"} />
                <NavOption link="/dashboard/playground" icon={<CurlyBraces />} selected={section == "playground"} />
            </div>
            <AccountOptions />
        </div>
    )
}