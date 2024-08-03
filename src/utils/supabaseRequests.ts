import {supabaseClient} from "./supabaseClient";

export const getData = async (tableName: string, token: string, selection: string) => {
    const supabase = await supabaseClient(token);

    const data = await supabase.from(tableName).select(selection ? selection : "*");

    return data;
}