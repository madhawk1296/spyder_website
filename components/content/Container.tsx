import { ReactNode } from "react";

export default function Container({ children, title }: { children: ReactNode, title: string }) {
    return (
        <div className="w-[400px] h-fit border-2 rounded-xl shadow p-[20px] flex flex-col gap-2 items-center">
            <h1 className="text-center text-2xl tracking-wide font-bold text-gray-800 ">{title}</h1>
            {children}
        </div>

    )
}