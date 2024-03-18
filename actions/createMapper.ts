'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { MappingType } from "@/components/modals/sidePanel/mapper/CreateMapperModal"
import { SubscriptionType } from "@/types/tables"

export default async function createMapper(formData: FormData): Promise<{data: number | null, error: string | null}> {
    const name = formData.get("name") as string
    const starting_block = Number(formData.get("starting_block"))
    const run_forever = (formData.get("run_forever") as string) === "true"
    const ending_block = run_forever ? null : Number(formData.get("ending_block"))
    const subgraph =  formData.get("subgraph") as string
    const contract_abi = JSON.parse(formData.get("contract_abi") as string)
    const contract_name = formData.get("contract_name") as string
    const contract_address = formData.get("contract_address") as string
    const mappings = JSON.parse(formData.get("mappings") as string) as MappingType[]

    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()


    try {
        const { data: mappers} = await supabase.from("mappers").select().eq("user_id", user!.id)

        const { data: userData } = await supabase.from("users").select("*, subscription_tier(*)")
        const mapperLimit = (userData![0].subscription_tier as unknown as SubscriptionType).mapper_limit

        if(mapperLimit  && mappers!.length >= mapperLimit) {
            throw Error("Passed Mapper Limit")
        }

        const event_mappings = await Promise.all(mappings.map(async (mapping) => {
            const { collection, collectionColumns: collection_columns, inputColumns: inputs_to_columns, event } = mapping
            const { data: event_mapping, error } = await supabase.from("event_mappings").insert({ action: "INSERT", collection, collection_columns, inputs_to_columns, event }).select()

            if(error) {
                throw Error(error.message)
            }

            return event_mapping![0].id
        }))

        const { data: mapper, error } = await supabase.from("mappers").insert({ status: "INACTIVE", starting_block, run_forever, ending_block, subgraph, name, contract_abi, contract_address, contract_name, user_id: user!.id, event_mappings}).select()

        if(error) {
            throw Error(error.message)
        }

        return { data: mapper[0].id, error: null }
    } catch(e: any) {
        console.log(e)

        return { data: null, error: e }
    }
}