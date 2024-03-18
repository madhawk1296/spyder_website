import kanit from "@/fonts/kanit";
import { SubscriptionType } from "@/types/tables";
import Feature from "./Feature";
import Link from "next/link";

export default function Plan({ plan, selected, userId }: { plan: SubscriptionType, selected: boolean, userId: string }) {
    const { title, price, subgraph_limit, mapper_limit, database_storage, stripe_link } = plan
    const userLink = `${stripe_link}?client_reference_id=${userId}`

    return (
        <div className={`h-full w-full ${selected ? "bg-gray-200" : "bg-gray-50"} border-2 shadow p-[10px] flex flex-col gap-2 rounded-xl `}>
            <h1 className={`text-2xl tracking-wide text-gray-700 ${kanit.semiBold}`}>{title}</h1>
            <h1><span className={`${kanit.bold} tracking-wide text-4xl text-gray-800`}>${price}</span> <span className={`text-xl tracking-wide ${kanit.medium} text-gray-600`}>/month</span></h1>
            <div className="flex flex-col gap-2">
                <Feature title={`${subgraph_limit || "Unlimited"} subgraphs`} />
                <Feature title={`${mapper_limit || "Unlimited"} mappers`} />
                <Feature title={`${database_storage} GB database storage`} />
                <Feature title="Email Support" />
            </div>
            <div className="mt-[20px] h-[50px] flex items-center justify-center self-center">
            {selected ? <h1 className={`text-center ${kanit.semiBold} text-gray-800 tracking-wide text `}>Current Plan</h1> : (
                <Link href={userLink!}>
                    <button className={`self-center px-[15px] py-[10px] rounded-lg shadow bg-gray-600 text-gray-50 ${kanit.semiBold} tracking-wide`}>Select</button>
                </Link>
            )}
            </div>
        </div>
    )
}