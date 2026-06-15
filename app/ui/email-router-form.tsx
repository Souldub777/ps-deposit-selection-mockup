"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { tierFromEmail } from "../../lib/tier";

export function EmailRouterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tier = tierFromEmail(email);
    router.push(tier ? `/book/${tier}` : "/select");
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
      />
      <button className="primaryButton" type="submit">
        Continue
      </button>
    </form>
  );
}
