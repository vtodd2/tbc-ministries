import { SectionHeading } from "@/app/components/SectionHeading";
import { MediaEmbed } from "@/app/components/MediaEmbed";
import { NewsletterForm } from "@/app/components/NewsletterForm";
import { siteConfig } from "@/app/lib/site";

export const metadata = {
  title: `Home | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <div className="bg-slate-100">
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-gold/20 bg-gold-soft px-3 py-1 text-sm text-gold">{siteConfig.title}</span>
              <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Bold faith. Luxurious grace.</h1>
              <p className="text-lg text-slate-300">Discover worship, teaching, and community that cultivates transformation.</p>
              <div className="mt-4 flex gap-3">
                <a href="/donations" className="rounded-full bg-gold px-5 py-3 font-semibold text-black">Give</a>
                <a href="/community" className="rounded-full border border-white/6 px-5 py-3 text-slate-950">Community</a>
              </div>
            </div>
            <div className="rounded-xl border border-white/6 bg-surface p-6">
              <h3 className="text-lg font-semibold text-slate-950">Featured Message</h3>
              <div className="mt-4">
                <MediaEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" />
              </div>
            </div>
          </div>
          <div className="mt-16 rounded-xl border border-white/6 bg-surface p-8">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold text-slate-950">Newsletter</h3>
              <p className="mt-2 text-slate-300">Receive weekly devotionals and ministry updates.</p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-100">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-slate-100 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-slate-100/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
