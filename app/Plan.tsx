import kanit from "@/fonts/kanit";
import Link from "next/link";
import { ReactNode } from "react";

export default function Plan({ children, title, price, highlight=false, buttonTitle }: { children: ReactNode, title: string, price: number, highlight?: boolean, buttonTitle: string}) {
    return (
        <div className={`w-[350px] rounded-lg h-fit border ${highlight ? "bg-red-100 border-red-200" : "bg-white"} shadow px-[20px] pt-[15px] pb-[30px] flex flex-col gap-1`}>
            <h1 className={`${kanit.medium} text-gray-800 tracking-wide text-2xl `}>{title}</h1>
            {price == 0 ? (
                <h1 className={`${kanit.bold} text-gray-800 tracking-wide text-4xl`}>Free</h1>
            ) : (
                <h1 className={`${kanit.bold} text-gray-800 tracking-wide text-3xl `}>$<span className="text-4xl">{price}</span><span className={`${kanit.semiBold} text-xl`}>/mo</span></h1>
            )}
            <h1 className={`text-xl text-gray-800 ${kanit.semiBold} pt-[10px] tracking-wide`}>Features include:</h1>
            <div className="flex flex-col gap-2 min-h-[200px]">
                {children}
            </div>
            <Link href="/comingsoon">
                <button className={`w-full shadow-md ${highlight ? "bg-red-500 hover:bg-red-600" : "bg-gray-700 hover:bg-gray-800"} hover:shadow-lg rounded-lg text-gray-50 py-[10px] smoothe tracking-wide`}>{buttonTitle}</button>
            </Link>
        </div>
    )
}