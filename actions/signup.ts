'use server'

import { supabaseServerClient } from "@/clients/supabase"

export default async function signUp(formData: FormData): Promise<{error: string | null, data: string | null}> {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const planId = formData.get("plan") as string

    const supabase = supabaseServerClient()

    try {
        const { data: plans, error: tierError } = await supabase.from("subscription_tiers").select()
        if(tierError) {
            throw Error(tierError.message)
        }
        const plan = plans.find(plan => plan.name === planId)
        const { data: { user }, error } = await supabase.auth.signUp({ email, password, options: {
            data: {
                subscription_tier: plan!.id
            },
            emailRedirectTo: `http://localhost:3000/auth/email`
        }})
        if(error) {
            throw Error(error.message)
        }

        return { error: null, data: email}

    } catch(e: any) {
        return { error: e.message, data: null}
    }
}