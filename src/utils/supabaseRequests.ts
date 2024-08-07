import {supabaseClient} from "./supabaseClient";

export const getData = async (tableName: string, user_id: string | null |undefined) => {
    const supabase = await supabaseClient(import.meta.env.VITE_PUBLIC_ANONYMOUS_KEY);

    const data = await supabase
    .from(tableName)
    .select()
    .eq("user_id", user_id)

    return data;
}