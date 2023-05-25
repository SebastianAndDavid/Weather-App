import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

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

async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

async function logOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}
export { userSignUp, userSignIn, logOut, getUser };
