import Image from "next/image";
import { ReactNode } from "react";

export default function Network({ title, icon, size }: { title: string, icon: string, size: number }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center justify-center h-[40px]">
            <Image className="rounded-lg" alt="Network" src={icon} width={size} height={size} />
            </div>
            <h1 className="text-gray-700 tracking-wide text">{title}</h1>
        </div>
    )
}