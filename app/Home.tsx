'use client'

import kanit from "@/fonts/kanit";
import Nav from "./Nav";
import Pricing from "./Pricing";
import Appear from "./Appear";
import FAQ from "./FAQ";
import Link from "next/link";
import { useRef } from "react";
import { SubscriptionType } from "@/types/tables";

export default function Home({ plans }: { plans: SubscriptionType[] }) {
  const priceRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)


  return (
    <div className="w-full flex flex-col min-h-screen pb-[50px]">
      <Nav priceRef={priceRef} faqRef={faqRef} />
      <Appear>
        <h1 className={`max-w-[1000px] text-balance text-center text-7xl ${kanit.bold} tracking-wide text-gray-800 leading-tighter smoothe-slow ease-in`}>Build <span className="text-red-500">Subgraphs</span> in minutes, not weeks</h1>
        <h1 className={`self-center text-center text-3xl tracking-wide text-gray-700 max-w-[600px] smoothe-slow ease-in ${kanit.medium}`}>Build subgraphs with <span className="text-red-500">no code</span>,<br/> saving you weeks of headache. </h1>
        <div className="flex flex-col gap-2 items-center">
          <Link href="/comingsoon">
            <button className="mt-[15px] self-center text-2xl bg-red-500 py-[10px] px-[15px] rounded-xl shadow-md text-gray-50 tracking-wide smoothe hover:bg-red-600 hover:shadow-lg w-fit">Start Free Trial</button>
          </Link>
          <h1 className={`text-lg ${kanit.medium} text-gray-600 tracking-wide`}>Try free for 14 days</h1>
        </div>
      </Appear>
      <Pricing plans={plans} currentRef={priceRef} />
      <FAQ currentRef={faqRef} />
      <div className="w-full h-[100px] flex justify-between items-center">
      </div>
    </div>
  )
}
