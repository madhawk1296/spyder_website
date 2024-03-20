import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdminClient } from "@/clients/supabase";

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest){
    const supabase = supabaseAdminClient()
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

    let event: Stripe.Event;
    try {
        const sig = req.headers.get('stripe-signature')!;
        const body = await req.text()
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_ENDPOINT_SECRET!)
    } catch (e: any) {
        return new NextResponse(`Webhook Error: ${e.message}`, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'customer.subscription.deleted':
            try {
                const subscription = event.data.object as Stripe.Subscription
                const { error } = await supabase.from("users").update({ subscription_tier: 1, subscription_id: null }).eq("subscription_id", subscription.id)

                if(error) {
                    throw Error(error.message)
                }
                
            } catch(e: any) {
                return new NextResponse(`Recieved Event, but unable to process: ${e.message}`, { status: 400 });
            }
        case 'checkout.session.completed':
            try {
                const { client_reference_id, id } = event.data.object as Stripe.Checkout.Session;

                const { line_items, subscription } = await stripe.checkout.sessions.retrieve(
                    id,
                    {
                      expand: ["line_items", "subscription"],
                    }
                );

                const productId = line_items?.data[0].price!.product! as string

                const { data: subscriptionTiers, error } = await supabase.from("subscription_tiers").select().eq("prod_id", productId)

                if(error) {
                    throw new Error(error.message)
                }

                const { error: updateError } = await supabase.from("users").update({ subscription_tier: subscriptionTiers[0].id, subscription_id: (subscription as Stripe.Subscription).id }).eq("user_id", client_reference_id!)

                if(updateError) {
                    throw new Error(updateError.message)
                }

                return new NextResponse('Handled Session Completed', { status: 200 })
            } catch(e: any) {
                return new NextResponse(`Recieved Event, but unable to process: ${e.message}`, { status: 400 });
            }
        default:
            return new NextResponse('Unfamiliar Event', { status: 200})
  }
}