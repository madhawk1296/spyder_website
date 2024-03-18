import { supabaseServerClient } from "@/clients/supabase";
import DashboardContainer from "../../DashboardContainer";
import Plans from "./Plans";

export default async function page() {
    const supabase = supabaseServerClient()
    const { data: { user }} = await supabase.auth.getUser()
    const { data: plans, error } = await supabase.from("subscription_tiers").select()


    return (
        <DashboardContainer>
            <Plans plans={plans!} userId={user!.id} />
        </DashboardContainer>
    )
}