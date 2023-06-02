import { useState } from "react";
import { useUserContext } from "../../Context/UserContext";
import { userSignIn } from "../../Utils/supabase-utils";

export default function SignInAuth() {
  const { setIsUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div>
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