import { getSubgraph, getTables } from "@/tools/database";
import Subgraph from "./Subgraph";
import CreateCollectionProvider from "@/components/providers/CreateCollectionProvider";
import { supabaseServerClient } from "@/clients/supabase";

export default async function Page({ params: { subgraph_id } }: { params: { subgraph_id: string }}) {
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    const subgraph = await getSubgraph(user!.id, subgraph_id)
    const tables = await getTables(user!.id, subgraph_id)


    return (
        <CreateCollectionProvider schema={subgraph_id} subgraph={subgraph} >
            <Subgraph subgraph={subgraph_id} tables={tables} />
        </CreateCollectionProvider>
    )
}