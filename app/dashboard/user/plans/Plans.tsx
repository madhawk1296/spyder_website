import kanit from "@/fonts/kanit";
import { SubscriptionType, UserType } from "@/types/tables";
import Plan from "./Plan";
import FreePlan from "./FreePlan";
import Stripe from "stripe";
import CancelSubscription from "./CancelSubscription";
import ResumeSubscription from "./ResumeSubscription";

export default function Plans({ plans, user, subscription }: { plans: SubscriptionType[], user: UserType, subscription: Stripe.Subscription | null }) {
    const { subscription_tier, user_id } = user
    const starter = plans.find(plan => plan.name == "starter")!
    const developer = plans.find(plan => plan.name == "developer")!
    const business = plans.find(plan => plan.name == "business")!

    return (
        <div className="w-full h-full flex justify-center  bg-gray-50">
            <div className="mt-[150px] w-[800px] h-fit border-2 rounded-xl shadow bg-white py-[15px] px-[20px] flex flex-col gap-4">
                <h1 className={`${kanit.semiBold} tracking-wide text-gray-800 text-3xl`}>Plans</h1>
                <FreePlan plan={starter} selected={subscription_tier == starter.id} />
                <div className="w-full flex gap-4 h-fit">
                    <Plan plan={developer} selected={subscription_tier == developer.id} userId={user_id!} />
                    <Plan plan={business} selected={subscription_tier == business.id} userId={user_id!} />
                </div>
                {subscription && (
                    subscription.cancel_at_period_end ? <ResumeSubscription cancelDate={subscription.cancel_at!} /> : <CancelSubscription />
                )}
            </div>
        </div>
    )
}