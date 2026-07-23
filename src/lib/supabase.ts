import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Please check your .env file.");
}

export const supabase = createClient<Database>(
  supabaseUrl || "https://dywcswrbsibymupogrpd.supabase.co",
  supabaseAnonKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d2Nzd3Jic2lieW11cG9ncnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NzA5MDMsImV4cCI6MjEwMDA0NjkwM30.0t6-zAHWd-YKJKrER_O59cc-R4bQvNY-9WfzieO9jHM"
);

export const getSupabaseAdmin = () => {
  const url = supabaseUrl || "https://dywcswrbsibymupogrpd.supabase.co";
  if (!supabaseServiceRoleKey) {
    return supabase;
  }
  return createClient<Database>(url, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};
