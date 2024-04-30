import { ReactNode } from "react";
import Mappers from "./Mappers";
import { supabaseServerClient } from "@/clients/supabase";
import CreateMapperProvider from "@/components/providers/CreateMapperProvider";
import { getSchemas, getSubgraphs, getTables } from "@/tools/database";
import { SubscriptionType } from "@/types/tables";

export default async function Layout({ children }: { children: ReactNode }) {
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    const { data: mappers } = await supabase.from("mappers").select()
    const { data: chains } = await supabase.from("chains").select()

    const subgraphs = await getSubgraphs(user!.id)

    const { data: userData } = await supabase.from("users").select("*, subscription_tier(*)")    
    const mapperLimit = (userData![0].subscription_tier as unknown as SubscriptionType).mapper_limit

    let limitReached = false
    if(mapperLimit && mappers!.length >= mapperLimit) {
        limitReached = true
    }

    return (
        <CreateMapperProvider subgraphs={subgraphs} chains={chains!} >
            <Mappers mappers={mappers!} limitReached={limitReached} >
                {children}
            </Mappers>
        </CreateMapperProvider>
    )
}