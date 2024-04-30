'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function logout() {
    try {
      const supabase = createServerActionClient({ cookies })
      const { error } = await supabase.auth.signOut()

      console.log(error)
      if(error) {
        throw new Error (error.message)
      }

      return { error: null}
      
    } catch(error: any ) {
      return { error: error.message }    
  }
}