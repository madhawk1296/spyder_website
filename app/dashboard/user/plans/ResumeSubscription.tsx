'use client'

import cancelPlan from "@/actions/cancelPlan";
import kanit from "@/fonts/kanit";
import { useRouter } from "next/navigation";
import { format } from "date-fns"
import resumePlan from "@/actions/resumePlan";

export default function ResumeSubscription({ cancelDate }: { cancelDate: number }) {
    const date = new Date(cancelDate * 1000);

    const router = useRouter()

    const handleResume = async () => {
        const { error } = await resumePlan()
        router.refresh()
     }

    return (
        <div className="flex gap-2 items-center">
            <h1 className="text-gray-800 tracking-wide">Subscription set to cancel on <span className="underline">{format(date, "MMM do")}</span>.</h1>
            <button onClick={handleResume} className={`bg-blue-400 rounded-lg shadow text-gray-50 tracking-wide text-sm ${kanit.semiBold} py-[5px] px-[10px]`}>Resume Subscription</button>                       
        </div>
    )
}