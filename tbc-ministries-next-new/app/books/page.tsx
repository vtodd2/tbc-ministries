import { SectionHeading } from "@/app/components/SectionHeading";

export default function BooksPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Books" title="Books by our ministry" description="Explore writings and resources from our leaders." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-white/6 bg-surface p-6">
            <h3 className="text-lg font-semibold text-slate-950">Book Title</h3>
            <p className="mt-2 text-slate-300">Short description and purchase placeholder.</p>
            <div className="mt-4">
              <button className="rounded-md bg-gold px-4 py-2 font-semibold text-black">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
