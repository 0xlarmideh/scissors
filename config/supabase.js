import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xarsxkzxwwdmibprodgf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcnN4a3p4d3dkbWlicHJvZGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2NjMyOTUsImV4cCI6MjAwNTIzOTI5NX0.Fqboqdzym3bQGwEHuAfwzuN4yhGbLePHFPU5z5ThF_A";

const supabase = createClient(supabaseUrl, supabaseKey);

// export { supabase };
export default supabase;
