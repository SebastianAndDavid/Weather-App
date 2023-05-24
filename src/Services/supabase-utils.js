import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

async function userSignUp() {
  const { data, error } = await supabase.auth.signUp({
    email: "testInMay@hardcoded.com",
    password: "123456",
  });
  console.log("error", error);
  if (data) {
    return data;
  } else {
    return error;
  }
}

async function userSignIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "testInMay@hardcoded.com",
    password: "123456",
  });
  console.log("error", error);
  if (data) {
    return data;
  } else {
    return error;
  }
}

export { userSignUp, userSignIn };
