'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function getUser() {
    const supabase = supabaseServerClient()

    const {data: { user }, error} = await supabase.auth.getUser()
    return user
}