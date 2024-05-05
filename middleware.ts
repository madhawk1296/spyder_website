import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/types/supabase'
import { supabaseMiddlewareClient, supabaseServerClient } from './clients/supabase'
import { SubscriptionType } from './types/tables'

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl.clone()
    const section = pathname.split("/")[2]
    const res = NextResponse.next()

    const supabase = supabaseMiddlewareClient()

    const { data: { user } } = await supabase.auth.getUser()
    const { data: users } = await supabase.from("users").select(`
        *, 
        subscription_tier(*)
    `).eq("user_id", user?.id!)
    const currentUser = users?.[0]
    
    if(currentUser) {
        if (section == "sign-in" || section == "sign-up") {
            return NextResponse.redirect(new URL('/dashboard/', req.url))
        }

    } else {
        if (section != "sign-in" && section != "sign-up") {
            return NextResponse.redirect(new URL('/dashboard/sign-in', req.url))
        }
    }

    return res
}

export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
}