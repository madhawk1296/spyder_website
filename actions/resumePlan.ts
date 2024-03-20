'use server'

import { supabaseServerClient } from "@/clients/supabase";
import Stripe from "stripe";

export default async function resumePlan(): Promise<{ error: string | null }> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });
    const supabase = supabaseServerClient()
    
    try {
        const { data: { user: authUser } } = await supabase.auth.getUser()
        
        if(!authUser) {
            throw Error("User doesn't exist")
        }

        const { data: users } = await supabase.from("users").select().eq("user_id", authUser.id)
        const { subscription_id } = users![0]

        const resumeSubscription = await stripe.subscriptions.update(subscription_id!, { cancel_at_period_end: false });
        console.log('Subscription resumed successfully:', resumeSubscription);

        return { error: null }
    } catch (error: any) {
        console.error('Error resuming subscription:', error);
        return { error: error.message }
    }
}