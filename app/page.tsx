import { supabaseServerClient } from "@/clients/supabase"
import Home from "./Home"

export default async function Page() {
  const supabase = supabaseServerClient()
  const { data: plans, error } = await supabase.from("subscription_tiers").select()

  return <Home plans={plans!} />
}
