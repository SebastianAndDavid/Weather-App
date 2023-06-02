import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

// Authentication
async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return true;
  } else {
    return false;
  }
}

async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) {
    return user;
  } else {
    return error;
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

async function logOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}

// HTTP Routes

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

async function getLastFiveCities(userId) {
  const { data, error } = await supabase
    .from("searched_cities")
    .select("*")
    .eq("user_id", userId)
    .order("id", { ascending: false })
    .range(0, 4);
  if (data) {
    return data;
  } else {
    return error;
  }
}

export {
  userSignUp,
  getUser,
  userSignIn,
  logOut,
  getCurrentUser,
  addCitiesOnSubmit,
  getLastFiveCities,
};
