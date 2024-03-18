export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      event_mappings: {
        Row: {
          action: string
          collection: string
          collection_columns: string[] | null
          event: string
          id: number
          inputs_to_columns: string[] | null
        }
        Insert: {
          action: string
          collection: string
          collection_columns?: string[] | null
          event: string
          id?: number
          inputs_to_columns?: string[] | null
        }
        Update: {
          action?: string
          collection?: string
          collection_columns?: string[] | null
          event?: string
          id?: number
          inputs_to_columns?: string[] | null
        }
        Relationships: []
      }
      mappers: {
        Row: {
          contract_abi: Json
          contract_address: string
          contract_name: string
          current_block: number | null
          ending_block: number | null
          event_mappings: number[]
          id: number
          name: string
          run_forever: boolean
          starting_block: number
          status: string
          subgraph: string
          user_id: string
        }
        Insert: {
          contract_abi: Json
          contract_address: string
          contract_name: string
          current_block?: number | null
          ending_block?: number | null
          event_mappings: number[]
          id?: number
          name: string
          run_forever: boolean
          starting_block: number
          status?: string
          subgraph: string
          user_id: string
        }
        Update: {
          contract_abi?: Json
          contract_address?: string
          contract_name?: string
          current_block?: number | null
          ending_block?: number | null
          event_mappings?: number[]
          id?: number
          name?: string
          run_forever?: boolean
          starting_block?: number
          status?: string
          subgraph?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_mappers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      schemas: {
        Row: {
          id: number
          name: string
          user_id: string
        }
        Insert: {
          id?: number
          name: string
          user_id: string
        }
        Update: {
          id?: number
          name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_schemas_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      subscription_tiers: {
        Row: {
          database_storage: number | null
          id: number
          mapper_limit: number | null
          name: string
          price: number
          prod_id: string | null
          stripe_link: string | null
          subgraph_limit: number | null
          title: string
        }
        Insert: {
          database_storage?: number | null
          id?: number
          mapper_limit?: number | null
          name: string
          price: number
          prod_id?: string | null
          stripe_link?: string | null
          subgraph_limit?: number | null
          title: string
        }
        Update: {
          database_storage?: number | null
          id?: number
          mapper_limit?: number | null
          name?: string
          price?: number
          prod_id?: string | null
          stripe_link?: string | null
          subgraph_limit?: number | null
          title?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          subscription_tier: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          subscription_tier?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          subscription_tier?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_users_subscription_tier_fkey"
            columns: ["subscription_tier"]
            isOneToOne: false
            referencedRelation: "subscription_tiers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
