import { useState } from "react";
import { userSignUp } from "../../Utils/supabase-utils";
import { useUserContext } from "../../Context/UserContext";

export default function SignUpAuth() {
  const { setIsUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      const res = await userSignUp(email, password);
      setEmail("");
      setPassword("");
      setIsUser(res);
      window.location.replace("/user-home");
      return res;
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
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
    </div>
  );
}
