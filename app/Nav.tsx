import Spidey from "@/components/logos/Spidey";
import kanit from "@/fonts/kanit";
import NavButton from "./NavButton";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="self-center w-full flex items-center justify-between max-w-[1200px] py-[15px]">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 mr-[10px]">
                    <div className="h-[30px]">
                        <Spidey />
                    </div>
                    <h1 className={`${kanit.bold} text-red-500 tracking-wider text-2xl`}>Spyder</h1>
                </div>
                <NavButton title="Features" />
                <NavButton title="Pricing" />
                <NavButton title="FAQ" />
            </div>
            <div className={`flex items-center gap-4 ${kanit.medium}`}>
                <Link href="/dashboard/sign-in">
                    <button className="text-lg py-[5px] px-[15px] rounded-xl shadow-md text-gray-800 bg-gray-50 tracking-wider smoothe hover:bg-gray-100 hover:shadow-lg">Log in</button>
                </Link>
                <Link href="/dashboard/sign-up">
                    <button className="text-lg bg-red-500 py-[5px] px-[15px] rounded-xl shadow-md text-gray-50 tracking-wider smoothe hover:bg-red-600 hover:shadow-lg">Sign up</button>
                </Link>
            </div>
        </div>
    )
}