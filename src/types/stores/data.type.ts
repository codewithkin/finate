import { Tables } from "../database.types";

export type shape = {
    balance: number,
    expenses: Tables<"expenses">,
    receipts: Tables<"receptions">,
    budgets: Tables<"budgets">,
    updateUserInfo: (data: shape) => void
}