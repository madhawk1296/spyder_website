'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { createSchema, getSchemas } from "@/tools/database"
import { SubscriptionType } from "@/types/tables"

export default async function createSubgraph(formData: FormData): Promise<{error: string | null}> {
    const name = formData.get("name") as string
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser() 

    try {
        const schemas = await getSchemas(user!.id)

        const { data: userData } = await supabase.from("users").select("*, subscription_tier(*)")
        const schemaLimit = (userData![0].subscription_tier as unknown as SubscriptionType).subgraph_limit

        if(schemaLimit  && schemas.length >= schemaLimit) {
            throw Error("Passed Schema Limit")
        }

        const { error } = await createSchema(user!.id, name) 

        if(error) {
            throw Error(error)
        }

        return {
            error: null
        }
    } catch(e: any) {
        console.log(e)
        return {
            error: e.message
        }
    }
}