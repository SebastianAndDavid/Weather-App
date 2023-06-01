import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

// Authentication
async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user in utils", user);
  if (user) {
    return true;
  } else {
    return false;
  }
}

async function userSignUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (data) {
    return data;
  } else {
    return error;
  }
}

async function userSignIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data) {
    return data;
  } else {
    return error;
  }
}

export { userSignUp, getUser, userSignIn };
