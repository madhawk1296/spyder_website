import { CreateSubgraphContext } from "@/components/providers/CreateSubgraphProvider";
import { useContext } from "react";
import CreateButton from "./CreateButton";
import { supabaseServerClient } from "@/clients/supabase";
import { getSchemas } from "@/tools/database";
import { SubscriptionType } from "@/types/tables";
import kanit from "@/fonts/kanit";
import Link from "next/link";

export default async function Page() {
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    const { data: userData } = await supabase.from("users").select("*, subscription_tier(*)")    
    const schemas = await getSchemas(user!.id)

    const schemaLimit = (userData![0].subscription_tier as unknown as SubscriptionType).subgraph_limit

    let limitReached = false
    if(schemaLimit && schemas.length >= schemaLimit) {
        limitReached = true
    }

    return (
        <div className="w-full h-full flex justify-center pt-[200px] bg-gray-100">
            <div className="w-[400px] h-fit border-2 rounded-xl shadow p-[20px] flex flex-col gap-2 items-center bg-white">
                <h1 className="text-center text-xl text-gray-800 tracking-wide font-semibold">Subgraphs</h1>
                <h1 className="text-center text-md text-gray-600 tracking-wide font-medium">Select a subgraph on the left panel to inspect it, or create a new one.</h1>
                <CreateButton disabled={limitReached} />
                {limitReached && <h1 className={`text-center text-sm text-gray-700 tracking-wide ${kanit.medium}`}>Subgraph limit reached.<br/><Link className={`text-blue-500 underline ${kanit.semiBold}`} href="/dashboard/user/plans">Upgrade plan</Link> to increase limit.</h1>}
            </div>
        </div>
    )
}