import { supabaseServerClient } from "@/clients/supabase";
import Mapper from "./Mapper";
import { getLatestBlock } from "@/tools/blockchain";


export default async function Page({ params: { mapper_id } }: { params: { mapper_id: string }}) {
    const supabase = supabaseServerClient()

    const { data: mappers }  = await supabase.from("mappers").select("*, chain(*)").eq("id", mapper_id)
    let latestBlock = await getLatestBlock()

    return (
        <Mapper mapper={mappers![0]} latestBlock={latestBlock} />
    )
}