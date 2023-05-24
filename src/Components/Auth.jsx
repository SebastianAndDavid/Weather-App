import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <label>
          Email
          <input placeholder="email" />
        </label>
        <label>
          Password
          <input placeholder="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
