"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MOCK_EMAIL = "anish@harvard.edu";
const MOCK_PASSWORD = "anishfyi";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 400));

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      localStorage.setItem("kaiross_authed", "true");
      localStorage.setItem("kaiross_user", JSON.stringify({ name: "Anish", email }));
      router.push("/feed");
    } else {
      setError("Invalid credentials. Try the mock email and password in the README.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Welcome back</h1>
      <form onSubmit={onSubmit} className="card p-6 space-y-4">
        {error ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 text-rose-700 px-3 py-2 text-sm">{error}</div>
        ) : null}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="anish@harvard.edu"
            className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="anishfyi"
            className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </section>
  );
}