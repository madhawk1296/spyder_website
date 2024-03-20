'use server'

import Stripe from "stripe";

export default async function cancelPlan() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

    try {
        const canceledSubscription = await stripe.subscriptions.update('sub_', { cancel_at_period_end: true });

        console.log('Subscription canceled successfully:', canceledSubscription);
    } catch (error) {
        console.error('Error canceling subscription:', error);
    }
}