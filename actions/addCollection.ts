'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { ColumnType, ForeignKeyType } from "@/components/modals/sidePanel/subgraph/CreateCollectionModal"
import { addTable, createSchema } from "@/tools/database"

export default async function addCollection(formData: FormData): Promise<{error: string | null}> {
    const schema = formData.get("schema") as string
    const name = formData.get("name") as string
    const columns = (formData.getAll("columns") as string[]).map(column => JSON.parse(column)) as ColumnType[]

    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    return await addTable(user!.id, schema, name, columns) 
}