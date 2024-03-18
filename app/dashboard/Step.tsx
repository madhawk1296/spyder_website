import kanit from "@/fonts/kanit";
import Link from "next/link";

export default function Step({ step, title, detail, buttonTitle, link }: { step: number, title: string, detail: string, buttonTitle: string, link: string}) {
    return (
        <div className="w-[600px] h-fit bg-white rounded-lg border-2 shadow p-[20px] flex flex-col gap-3">
            <h1 className={`text-2xl text-gray-700 tracking-wide ${kanit.semiBold}`}>{step}. {title}</h1>
            <h1 className={`${kanit.medium} text-gray-600`} >{detail}</h1>
            <Link className="self-center" href={link}>
                <button className={`text-sm self-center px-[15px] py-[10px] bg-red-500 shadow smoothe text-gray-50 tracking-wide hover:bg-red-600 hover:shadow-md w-fit rounded-xl ${kanit.semiBold}`}>{buttonTitle}</button>
            </Link>
        </div>
    )
}