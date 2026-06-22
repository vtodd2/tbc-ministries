"use client";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Subscribed: ${email}`);
      }}
      className="grid gap-3 sm:grid-cols-[1fr_auto]"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="rounded-3xl border border-slate-200 bg-[#080808] px-4 py-3 text-slate-950 outline-none"
      />
      <button className="rounded-3xl bg-gold px-5 py-3 font-semibold text-black">Subscribe</button>
    </form>
  );
}
