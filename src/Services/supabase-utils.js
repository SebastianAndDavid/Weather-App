import { createClient } from "@supabase/supabase-js";
const url = "https://wyotgiskxqtlavlkrzle.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U";

const supabase = createClient(url, key);
console.log("supabase", supabase);

async function userSignUp() {
  const { data, error } = await supabase.auth.signUp({
    email: "testInMay@hardcoded.com",
    password: "123456",
  });
  console.log("data", data);
  if (data) {
    return data;
  } else {
    return error;
  }
}

export { userSignUp };
