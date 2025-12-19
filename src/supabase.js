import { createClient } from '@supabase/supabase-js'

// Supabase connection setup - environment variables se values utha raha hai
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Client create kar rahe hain jo pure app mein use hoga
export const supabase = createClient(supabaseUrl, supabaseKey)
