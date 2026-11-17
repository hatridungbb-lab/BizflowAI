
// =====================================
// BIZFLOW AI - SUPABASE CONFIGURATION
// =====================================

const SUPABASE_URL = "YOUR_PROJECT_URL";

const SUPABASE_ANON_KEY = "YOUR_PUBLISHABLE_OR_ANON_KEY";

// Create Supabase client
const { createClient } = supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("BizFlow AI: Supabase connected!");

