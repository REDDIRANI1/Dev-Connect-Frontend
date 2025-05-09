import { useState } from "react";

interface Props {
  onSubmit: (data: { username: string; password: string }) => void;
  type: "login" | "signup";
}

export default function AuthForm({ onSubmit, type }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="space-y-4 bg-white p-6 rounded shadow max-w-md mx-auto mt-10"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ username, password });
      }}
    >
      <h2 className="text-2xl font-bold text-center">
        {type === "login" ? "Login" : "Sign Up"}
      </h2>
      <input
        className="w-full border p-2 rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        type="submit"
      >
        {type === "login" ? "Login" : "Create Account"}
      </button>
    </form>
  );
}
