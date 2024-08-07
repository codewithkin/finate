import { Tables } from "../database.types";

export type shape = {
    balance: Tables<"balances">,
    expenses: Tables<"expenses">,
    receipts: Tables<"receptions">,
    budgets: Tables<"budgets">,
    updateUserInfo: (data: shape) => void
}