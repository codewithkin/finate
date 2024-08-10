[?25l
    Select a project:                                                                          
                                                                                               
  >  1. nxuybbzhgvpvmzqvimxd [name: Finate, org: caolydpnumihbqcqhpmj, region: eu-central-1]   
    2. cypsqughocfabwtpwfzq [name: Shitsuyoka, org: dozomrdnuvgpqdggcuye, region: eu-central-1]
                                                                                               
                                                                                               
    ↑/k up • ↓/j down • / filter • q quit • ? more                                             
                                                                                               [0D[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[0D[2K [0D[2K[?25h[?1002l[?1003l[?1006lexport type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      balances: {
        Row: {
          amount: number
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: number
          user_id?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: []
      }
      budgets: {
        Row: {
          amount: number
          endsOn: string
          name: string
          note: string | null
          userId: string
        }
        Insert: {
          amount: number
          endsOn: string
          name: string
          note?: string | null
          userId?: string
        }
        Update: {
          amount?: number
          endsOn?: string
          name?: string
          note?: string | null
          userId?: string
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          name: string
          note: string | null
          userid: string
        }
        Insert: {
          amount: number
          name: string
          note?: string | null
          userid?: string
        }
        Update: {
          amount?: number
          name?: string
          note?: string | null
          userid?: string
        }
        Relationships: []
      }
      receptions: {
        Row: {
          amount: number
          name: string
          note: string | null
          userid: string
        }
        Insert: {
          amount: number
          name: string
          note?: string | null
          userid?: string
        }
        Update: {
          amount?: number
          name?: string
          note?: string | null
          userid?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string | null
          first_name: string | null
          id: string
          image_url: string | null
          last_name: string | null
          profile_image_url: string | null
        }
        Insert: {
          email?: string | null
          first_name?: string | null
          id: string
          image_url?: string | null
          last_name?: string | null
          profile_image_url?: string | null
        }
        Update: {
          email?: string | null
          first_name?: string | null
          id?: string
          image_url?: string | null
          last_name?: string | null
          profile_image_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      categories:
        | "Essential Expenses"
        | "Savings and Debt Repayment"
        | "Personal and Wellness"
        | "Family and Relationships"
        | "Home and Garden"
        | "Education and Personal Growth"
        | "Entertainment and Leisure"
        | "Travel and Exploration"
        | "Miscellaneous"
      priority: "low" | "medium" | "high"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
