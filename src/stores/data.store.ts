import { shape } from "@/types/stores/data.type";
import { create } from "zustand";

export const useDataStore = create<shape>()(set => ({
    balance: {
        amount: 0,
        created_at: "",
        id: 0,
        user_id: ""
    },
    budgets: {
        id: 0,
        user_id: "",
        budgets: [],
    },
    expenses: {
        id: 0,
        user_id: "",
        expenses: [],
    },
    receipts: {
        id: 0,
        user_id: "",
        receptions: [],
    },
    updateUserInfo: (data: shape) => set((state: shape) => ({
        state: {
            ...data
        }
    }))
}))