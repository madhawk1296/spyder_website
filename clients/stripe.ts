import Stripe from "stripe";

export default function stripeClient() {
    return new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });
}