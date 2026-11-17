
// =====================================
// BIZFLOW AI - SUPABASE CONFIGURATION
// =====================================

const SUPABASE_URL = "https://xofriivockwiycdnnfvx.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_Q6ogosVTXKRpzbZwJcyZmw_yKzEwKYO";

// Create Supabase client
const { createClient } = supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("BizFlow AI: Supabase connected!");

