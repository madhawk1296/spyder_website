'use client'

import cancelPlan from "@/actions/cancelPlan";
import kanit from "@/fonts/kanit";
import { useRouter } from "next/navigation";

export default function CancelSubscription() {
    const router = useRouter()

    const handleCancel = async () => {
        const { error } = await cancelPlan()
        router.refresh()
     }

    return (
        <div className="flex gap-2 items-center">
            <button onClick={handleCancel} className={`bg-red-400 rounded-lg shadow text-gray-50 tracking-wide text-sm ${kanit.semiBold} py-[5px] px-[10px]`}>Cancel Subscription</button>                       
        </div>
    )
}