import { useState } from "react";
import { userSignIn, userSignUp } from "../../Utils/supabase-utils";
import { useUserContext } from "../../Context/UserContext";

export default function Auth() {
  const { setIsUser } = useUserContext();
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
    console.log("res in signIn", res);
    setEmail("");
    setPassword("");
    setIsUser(res);
    return res;
  }

  return (
    <div className="auth-home">
      Sign Up
      <form className="auth-form" onSubmit={(e) => handleSignUp(e)}>
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
      <form className="auth-form" onSubmit={(e) => handleSignIn(e)}>
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
