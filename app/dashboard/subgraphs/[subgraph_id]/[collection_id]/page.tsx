import { getColumns, getRowCount } from "@/tools/database"
import React from "react";
import Table from "./Table";
import { supabaseServerClient } from "@/clients/supabase";

export default async function Page({ params: { subgraph_id, collection_id } }: { params: { subgraph_id: string, collection_id: string }}) {
    const supabase = supabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    const columns = await getColumns(user!.id, subgraph_id, collection_id);
    const rowCount = await getRowCount(user!.id, subgraph_id, collection_id)
    
    return (
        <div className="w-full h-full flex flex-col overflow-hidden relative">
            <div className="w-full py-[2px] border-b-2">
                <h1 className="py-[10px] px-[15px] tracking-wide font-semibold text-gray-800">{subgraph_id} / {collection_id}</h1>
            </div>
            <Table subgraph={subgraph_id} collection={collection_id} columns={columns} rowCount={rowCount} />
        </div>
    )
}