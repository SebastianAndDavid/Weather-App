import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

// Authentication
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

// HTTP routes

async function addCitiesOnSubmit(name, id) {
  const { data, error } = await supabase
    .from("searched_cities")
    .insert([{ city: name, user_id: id }]);
  if (data) {
    return data;
  } else {
    return error;
  }
}

export { userSignUp, userSignIn, logOut, getUser, addCitiesOnSubmit };
