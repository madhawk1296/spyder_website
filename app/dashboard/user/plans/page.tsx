import { supabaseServerClient } from "@/clients/supabase";
import DashboardContainer from "../../DashboardContainer";
import Plans from "./Plans";
import stripeClient from "@/clients/stripe";

export default async function page() {
    const supabase = supabaseServerClient()
    const { data: { user: authUser }} = await supabase.auth.getUser()
    const { data: users } = await supabase.from("users").select().eq("user_id", authUser!.id)
    const user = users![0]
    const { data: plans, error } = await supabase.from("subscription_tiers").select()

    const stripe = stripeClient()
    const subscription = user.subscription_id ? await stripe.subscriptions.retrieve(user.subscription_id!) : null

    return (
        <DashboardContainer>
            <Plans plans={plans!} user={user} subscription={subscription} />
        </DashboardContainer>
    )
}