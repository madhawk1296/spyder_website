import { Tables } from "./supabase";

export type MapperType = Tables<"mappers">
export type SubscriptionType = Tables<"subscription_tiers">
export type UserType = Tables<"users">
export type ChainType = Tables<"chains">