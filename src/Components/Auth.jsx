import { useState } from "react";
import { userSignUp } from "../Services/supabase-utils";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    const res = await userSignUp(email, password);
    return res;
  }

  return (
    <div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <label>
          Email
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
