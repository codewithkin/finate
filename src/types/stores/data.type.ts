import { Tables } from "../database.types";

export type shape = {
    balance: Tables<"balances">,
    expenses: Array<Tables<"expenses">>,
    receipts: Array<Tables<"receptions">>,
    budgets: Array<Tables<"budgets">>,
    updateUserInfo: (data: shape) => void
}