"use client";
import { useState } from "react";

export function PrayerForm() {
  const [form, setForm] = useState({ name: "", request: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Prayer requested: ${form.request}`);
      }}
      className="grid gap-3"
    >
      <label className="sr-only" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your name (optional)"
        className="rounded-md border border-slate-200 bg-[#070707] px-3 py-2 text-slate-950"
      />
      <label className="sr-only" htmlFor="request">
        Prayer request
      </label>
      <textarea
        id="request"
        value={form.request}
        onChange={(e) => setForm({ ...form, request: e.target.value })}
        placeholder="Share your prayer request"
        className="min-h-[140px] rounded-md border border-slate-200 bg-[#070707] px-3 py-2 text-slate-950"
      />
      <button className="w-fit rounded-md bg-gold px-4 py-2 font-semibold text-black">Submit Prayer</button>
    </form>
  );
}
