import {supabaseClient} from "./supabaseClient";
import type {budget} from "@/types/budget";

export const getData = async (tableName: string, user_id: string | null |undefined) => {
    const supabase = await supabaseClient(import.meta.env.VITE_PUBLIC_ANONYMOUS_KEY);

    const {data} = await supabase
    .from(tableName)
    .select()

    return data;
}

export const addNewBudget = async (userId: string | null |undefined, budgetData: budget) => {
    const supabase = await supabaseClient(import.meta.env.VITE_PUBLIC_ANONYMOUS_KEY);

    const {error} = await supabase
    .from("budgets")
    .upsert(
        {
                userId,
                name: budgetData.name,
                amount: budgetData.amount,
                endsOn: budgetData.endsOn,
                note: budgetData.note
    })

    if(error) {
        console.log(error.message);
    } else {
        return true;
    }
}