"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { tierFromEmail } from "../../lib/tier";

export function EmailRouterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isChecking) return;

    setIsChecking(true);
    try {
      const tier = await tierFromEmail(email);
      router.push(tier ? `/book/${tier}` : "/select");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <form className="emailForm" onSubmit={onSubmit}>
      <label htmlFor="deposit-email">Email address used for your deposit</label>
      <input
        id="deposit-email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        required
        disabled={isChecking}
      />
      <button
        className="primaryButton"
        type="submit"
        disabled={isChecking || email.trim().length === 0}
        aria-busy={isChecking}
      >
        {isChecking ? "Checking..." : "Continue"}
      </button>
    </form>
  );
}
