import Check from "@/components/icons/Check";
import kanit from "@/fonts/kanit";
import { SubscriptionType } from "@/types/tables";

export default function FreePlan({ plan, selected }: { plan: SubscriptionType, selected: boolean}) {
    const { subgraph_limit, mapper_limit, database_storage } = plan
    return (
        <div className={`w-full h-[100px] rounded-xl shadow flex items-center justify-between p-[15px] border-2 ${selected ? "bg-gray-200" : "bg-gray-50" }`}>
            <h1 className={`text-2xl tracking-wide text-gray-800 ${kanit.bold}`}>Free</h1>
            <div className="flex gap-2 items-center">
                <div className="h-[20px]">
                    <Check />
                </div>
                <h1 className={`text ${kanit.light} tracking-wide text-gray-700`}>Included in plan: {subgraph_limit} subgraph, {mapper_limit} mapper, {database_storage} GB database storage.</h1>
            </div>
            {selected && <h1 className={`text-center ${kanit.semiBold} text-gray-800 tracking-wide text `}>Current Plan</h1>}
        </div>
    )
}