"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/app/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/6 bg-slate-100 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-slate-950">
          Transformed Believers
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-slate-950">
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded-md bg-slate-50 p-2 text-slate-950"
          >
            Menu
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-4 top-16 rounded-lg bg-surface p-4 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-slate-950">
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
