import { shape } from "@/types/stores/data.type";
import { create } from "zustand";

export const useDataStore = create<shape>()(set => ({
    balance: 0,
    budgets: {
        amount: 0,
        created_at: "",
        ending_date: "",
        id: 0,
        priority: "low",
        user_id: ""
    },
    expenses: {
        amount: 0,
        created_at: "",
        id: 0,
        note: "",
        user_id: ""
    },
    receipts: {
        amount: 0,
        created_at: "",
        id: 0,
        note: "",
        user_id: ""
    },
    updateUserInfo: (data: shape) => set((state: any) => ({
        state: {
            ...data
        }
    }))
}))