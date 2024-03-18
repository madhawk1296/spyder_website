import { supabaseServerClient } from "@/clients/supabase"
import { SubscriptionType } from "@/types/tables"
import CreateButton from "./CreateButton"
import kanit from "@/fonts/kanit"
import Link from "next/link"

export default async function Page() {
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    const { data: mappers } = await supabase.from("mappers").select()

    const { data: userData } = await supabase.from("users").select("*, subscription_tier(*)")    
    const mapperLimit = (userData![0].subscription_tier as unknown as SubscriptionType).mapper_limit

    let limitReached = false
    if(mapperLimit && mappers!.length >= mapperLimit) {
        limitReached = true
    }
    
    return (
        <div className="w-full h-full flex justify-center pt-[200px] bg-gray-100">
            <div className="w-[400px] h-fit border-2 rounded-xl shadow p-[20px] flex flex-col gap-2 items-center bg-white">
                <h1 className="text-center text-xl text-gray-800 tracking-wide font-semibold">Mappers</h1>
                <h1 className="text-center text-md text-gray-600 tracking-wide font-medium">Select a mapper on the left panel to inspect it, or create a new one.</h1>
                <CreateButton disabled={limitReached} />
                {limitReached && <h1 className={`text-center text-sm text-gray-700 tracking-wide ${kanit.medium}`}>Mapper limit reached.<br/><Link className={`text-blue-500 underline ${kanit.semiBold}`} href="/dashboard/user/plans">Upgrade plan</Link> to increase limit.</h1>}
            </div>
        </div>
    )
}