import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/types/supabase'
import { supabaseMiddlewareClient, supabaseServerClient } from './clients/supabase'

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl.clone()
    const section = pathname.split("/")[2]
    const res = NextResponse.next()

    const supabase = supabaseMiddlewareClient()

    const { data: { session }, error } = await supabase.auth.getSession()

    if(session) {
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