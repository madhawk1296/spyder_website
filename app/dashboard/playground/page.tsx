import { supabaseServerClient } from "@/clients/supabase";
import DashboardContainer from "../DashboardContainer";
import { getSubgraphs } from "@/tools/database";
import Playground from "./Playground";

export default async function Page() {
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    const subgraphs = await getSubgraphs(user!.id)

    return (
        <DashboardContainer>
            <Playground userId={user!.id} subgraphs={subgraphs} />
        </DashboardContainer>
    )
}