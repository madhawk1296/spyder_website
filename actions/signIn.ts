'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function signIn(formData: FormData): Promise<{error: string | null}> {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const supabase = supabaseServerClient()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        console.log(data)

        if(error) {
            throw Error(error.message)
        }

        return { error: null}
    } catch(e: any) {
        return { error: e.message}
    }}