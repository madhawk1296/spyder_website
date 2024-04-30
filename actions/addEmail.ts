'use server'

import { supabaseAdminClient } from "@/clients/supabase"

export default async function addEmail(formData: FormData) {
    const email = formData.get("email") as string

    const supabase = supabaseAdminClient()

    await supabase.from("emails").insert({ email })
}