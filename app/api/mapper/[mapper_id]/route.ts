import { supabaseServerClient } from "@/clients/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params: { mapper_id } }: { params: { mapper_id: string } }) {
    const supabase = supabaseServerClient()

    const { data: mappers }  = await supabase.from("mappers").select().eq("id", mapper_id) 
    
    if(mappers) {
        const mapper = mappers[0]
        return Response.json({ data: mapper.current_block })
    } else {
        return Response.json({ error: "No mapper exists" })
    }
}