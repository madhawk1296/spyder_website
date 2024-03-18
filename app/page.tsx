import kanit from "@/fonts/kanit";
import Nav from "./Nav";
import Features from "./Features";
import Pricing from "./Pricing";
import Appear from "./Appear";
import FAQ from "./FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-100 pb-[50px]">
      <Nav />
      <Appear>
        <h1 className={`text-center text-7xl ${kanit.bold} tracking-wide text-gray-800 leading-tighter smoothe-slow ease-in`}>Build <span className="text-red-500">Subgraphs</span> in minutes,<br/> not weeks</h1>
        <h1 className={`self-center text-center text-3xl tracking-wide text-gray-700 max-w-[600px] smoothe-slow ease-in ${kanit.medium}`}>Build subgraphs with <span className="text-red-500">no code</span>,<br/> saving you weeks of headache. </h1>
        <div className="flex gap-6 items-center">
          <Link href="/dashboard/sign-up">
            <button className="mt-[15px] self-center text-2xl bg-red-500 py-[10px] px-[15px] rounded-xl shadow-md text-gray-50 tracking-wide smoothe hover:bg-red-600 hover:shadow-lg w-fit">Start Free</button>
          </Link>
          <button className="mt-[15px] self-center text-2xl bg-white py-[10px] px-[15px] rounded-xl shadow-md text-gray-700 border-2 tracking-wide smoothe hover:bg-gray-100 hover:shadow-lg w-fit">View Pricing</button>
        </div>
        <Features />
      </Appear>
      <Pricing />
      <FAQ />
      <div className="w-full h-[100px] flex justify-between items-center">
      </div>
    </div>
  )
}
