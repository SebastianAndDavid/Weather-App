import { useState } from "react";
import { userSignIn, userSignUp } from "../Services/supabase-utils";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    const res = await userSignUp(email, password);
    setEmail("");
    setPassword("");
    return res;
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const res = await userSignIn(email, password);
    setEmail("");
    setPassword("");
    return res;
  }

  return (
    <div>
      Sign Up
      <form onSubmit={(e) => handleSignUp(e)}>
        <label>
          Email
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <br></br>
      Sign In
      <form onSubmit={(e) => handleSignIn(e)}>
        <label>
          Email
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
