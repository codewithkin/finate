import { utils } from "@/types/stores/utils.type"
import { create } from "zustand"

export const useUtilsStore = create<utils>()(set => ({
    refetch: "",
    updateRefetch: (val: string) => set((state: utils) => ({
        refetch: val
    }))
}))