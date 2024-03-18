import { pgClient } from "@/clients/pg"
import Subgraphs from "./Subgraphs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { ReactNode } from "react"
import { getSchemas } from "@/tools/database"
import CreateSubgraphProvider from "@/components/providers/CreateSubgraphProvider"
import { supabaseServerClient } from "@/clients/supabase"
import { SubscriptionType } from "@/types/tables"

export default async function Layout({ children }: { children: ReactNode}) {
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
        <CreateSubgraphProvider>
            <Subgraphs children={children} subgraphs={schemas} limitReached={limitReached} />
        </CreateSubgraphProvider>
    )
}