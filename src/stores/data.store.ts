import { shape } from "@/types/stores/data.type";
import { create } from "zustand";

export const useDataStore = create<shape>()(set => ({
    balance: {
        amount: 0,
        created_at: "",
        id: 0,
        user_id: ""
    },
    budgets: [],
    expenses: [],
    receipts: [],
    updateUserInfo: (data: shape) => set((state: shape) => ({
        budgets: data.budgets,
        expenses: data.expenses,
        receipts: data.receipts,
        balance: data.balance
    }))
}))