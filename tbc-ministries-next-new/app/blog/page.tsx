import Link from "next/link";
import { SectionHeading } from "@/app/components/SectionHeading";

const samplePosts = [
  { slug: "welcome", title: "Welcome to Transformed Believers", excerpt: "An introduction to our mission." },
  { slug: "faith-practice", title: "Faith & Practice", excerpt: "Practical discipleship for daily life." },
];

export default function BlogPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Blog" title="Articles & teachings" description="Read our latest articles and devotionals." />
        <div className="mt-8 space-y-6">
          {samplePosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-white/6 bg-surface p-6">
              <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-slate-950">
                {post.title}
              </Link>
              <p className="mt-2 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
