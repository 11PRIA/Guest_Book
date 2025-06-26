// Replace with your Supabase project credentials
const SUPABASE_URL = 'https://jfayoulvklkdinfaqtjw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYXlvdWx2a2xrZGluZmFxdGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MzE5OTcsImV4cCI6MjA2NjUwNzk5N30.jjDjmH3_Vnppjedao4hVqDgk8FjPrtdf_Cva6D7r7hk';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 