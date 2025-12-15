
const SUPABASE_URL = "https://gpfxakuneeuafxgqbobs.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZnhha3VuZWV1YWZ4Z3Fib2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzE3ODEsImV4cCI6MjA4MTMwNzc4MX0.x2Mh3LwIg-8peEpJlif_1RcbrA-CyGa-xjtESaYKcXQ";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
