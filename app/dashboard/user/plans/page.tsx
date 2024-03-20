import { supabaseServerClient } from "@/clients/supabase";
import DashboardContainer from "../../DashboardContainer";
import Plans from "./Plans";

export default async function page() {
    const supabase = supabaseServerClient()
    const { data: { user: authUser }} = await supabase.auth.getUser()
    const { data: users } = await supabase.from("users").select().eq("user_id", authUser!.id)
    const { data: plans, error } = await supabase.from("subscription_tiers").select()


    return (
        <DashboardContainer>
            <Plans plans={plans!} user={users![0]} />
        </DashboardContainer>
    )
}