'use server'

import { supabaseServerClient } from "@/clients/supabase"
import { CreateDatabase } from "@/tools/database"

export default async function signUp(formData: FormData): Promise<{error: string | null}> {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const supabase = supabaseServerClient()

    try {
        const { data: { user }, error } = await supabase.auth.signUp({ email, password })

        if(error) {
            throw Error(error.message)
        }

        if(user) {
            await CreateDatabase(user.id)   
        }

        return { error: null}
    } catch(e: any) {
        return { error: e.message}
    }
}