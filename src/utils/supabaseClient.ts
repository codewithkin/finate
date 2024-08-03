import { createClient } from "@supabase/supabase-js";

export const supabaseClient = async (token: string) => {
	const supabase = createClient(
		import.meta.env.VITE_PUBLIC_SUPABASE_URL,
		import.meta.env.VITE_PUBLIC_ANONYMOUS_KEY,
		{
			global: { headers: { Authorization: `Bearer ${token}` }  }
		}
	)

	return supabase;
}
