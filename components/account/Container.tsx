import { ReactNode } from "react";
import Spidey from "../logos/Spidey";
import kanit from "@/fonts/kanit";
import Link from "next/link";

export default function Container({ children }: { children: ReactNode}) {
    return (
        <div className="bg-gray-50 h-screen w-full relative flex flex-col items-center py-[20px] gap-24">
            <Link href="/">
                <div className="flex items-center gap-1">
                    <div className="h-[35px]">
                        <Spidey />
                    </div>
                    <h1 className={`${kanit.bold} text-red-500 tracking-wider text-3xl`}>Spidey</h1>
                </div>
            </Link>
            {children}
        </div>
    )
}