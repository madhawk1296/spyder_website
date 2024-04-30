'use client'

import Spidey from "@/components/logos/Spidey";
import kanit from "@/fonts/kanit";
import NavButton from "./NavButton";
import Link from "next/link";
import { RefObject, useEffect, useState } from "react";

export default function Nav({ priceRef, faqRef }: { priceRef: RefObject<HTMLDivElement>, faqRef: RefObject<HTMLDivElement> }) {
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const scrollPrice = () => {
        priceRef.current && priceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollFaq = () => {
        faqRef.current && faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className={`self-center w-full sticky top-0 bg-white flex justify-center smoothe ${shadow && "shadow"}`}>
            <div className="w-full max-w-[1200px] flex items-center justify-between py-[15px]">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 mr-[10px]">
                        <div className="h-[30px]">
                            <Spidey />
                        </div>
                        <h1 className={`${kanit.bold} text-red-500 tracking-wider text-2xl`}>Spidey</h1>
                    </div>
                    <NavButton title="Pricing" onClick={scrollPrice} />
                    <NavButton title="FAQ" onClick={scrollFaq} />
                </div>
                <div className={`flex items-center gap-4 ${kanit.medium}`}>
                    <Link href="/comingsoon">
                        <button className="text-lg py-[5px] px-[15px] rounded-xl shadow-md text-gray-800 bg-gray-50 tracking-wider smoothe hover:bg-gray-100 hover:shadow-lg">Log in</button>
                    </Link>
                    <Link href="/comingsoon">
                        <button className="text-lg bg-red-500 py-[5px] px-[15px] rounded-xl shadow-md text-gray-50 tracking-wider smoothe hover:bg-red-600 hover:shadow-lg">Start Free Trial</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}