"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Message sent from ${form.name}`);
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
        placeholder="Your name"
        className="rounded-md border border-slate-200 bg-[#070707] px-3 py-2 text-slate-950"
      />
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email address"
        className="rounded-md border border-slate-200 bg-[#070707] px-3 py-2 text-slate-950"
      />
      <label className="sr-only" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="How can we pray for you?"
        className="min-h-[120px] rounded-md border border-slate-200 bg-[#070707] px-3 py-2 text-slate-950"
      />
      <button className="w-fit rounded-md bg-gold px-4 py-2 font-semibold text-black">Send Message</button>
    </form>
  );
}
