import kanit from "@/fonts/kanit";
import Plan from "./Plan";
import PlanFeature from "./PlanFeature";
import { RefObject } from "react";
import { SubscriptionType } from "@/types/tables";

export default function Pricing({ plans, currentRef }: { plans: SubscriptionType[], currentRef: RefObject<HTMLDivElement> }) {
    const developer = plans.find(plan => plan.name == "developer")!
    const business = plans.find(plan => plan.name == "business")!

    return (
        <div ref={currentRef} className="flex flex-col gap-8 pt-[50px] items-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className={`text-5xl ${kanit.bold} text-gray-700 tracking-wide`}>The easiest way to build subgraphs</h1>
                <h1 className={`text-2xl ${kanit.light} text-gray-700 tracking-wide text-center`}>Save weeks of dev time and headache<br/> so you can focus on building your app.</h1>
            </div>
            <div className="flex gap-8">
                <Plan highlight={true} title="Developer" price={developer.price} buttonTitle="Start Free Trail" >
                    <PlanFeature title={`${developer.subgraph_limit || "Unlimited"} subgraphs`} />
                    <PlanFeature title={`${developer.mapper_limit || "Unlimited"} mappers`} />
                    <PlanFeature title={`${developer.database_storage} GB database storage`} />
                    <PlanFeature title="Email support" />
                </Plan>
                <Plan title="Business" price={business.price} buttonTitle="Start Free Trail" >
                    <PlanFeature title={`${business.subgraph_limit || "Unlimited"} subgraphs`} />
                    <PlanFeature title={`${business.mapper_limit || "Unlimited"} mappers`} />
                    <PlanFeature title={`${business.database_storage} GB database storage`} />
                    <PlanFeature title="Email support" />
                </Plan>
            </div> 
        </div>
    )
}