import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

// Authentication
async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

async function userSignUp() {
  const { data, error } = await supabase.auth.signUp({
    email: "david2@test.com",
    password: "123456",
  });
  if (data) {
    return data;
  } else {
    return error;
  }
}

async function userSignIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "david2@test.com",
    password: "123456",
  });
  if (data) {
    return data;
  } else {
    return error;
  }
}

export { userSignUp, getUser, userSignIn };
