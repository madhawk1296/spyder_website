import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { supabaseServerClient } from '@/clients/supabase'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = supabaseServerClient()
    await supabase.auth.verifyOtp({ token_hash: code, type: "signup",  options: { redirectTo: "http://localhost:3000/dashboard"}})  
}

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin + "/dashboard")
}