import Link from "next/link";
import { siteConfig } from "@/app/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6 bg-white/95">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 text-sm text-slate-300">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{siteConfig.title}</h3>
            <p className="mt-2 max-w-md text-slate-300">{siteConfig.description}</p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <Link href="/contact" className="text-slate-300 hover:text-slate-950">
              Contact
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-slate-950">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} {siteConfig.title}. All rights reserved.</p>
          <p className="text-xs text-slate-400">Made with faith and intention.</p>
        </div>
      </div>
    </footer>
  );
}
