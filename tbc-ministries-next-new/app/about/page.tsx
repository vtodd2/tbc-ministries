import { SectionHeading } from "@/app/components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="Who we are"
          description="Transformed Believers Church is a Christ-centered community committed to worship, discipleship, and global outreach."
        />
        <div className="mt-8 space-y-6 text-slate-300">
          <p>
            We are a community that values reverent worship, practical teaching, and a deep commitment to transforming lives through the gospel.
          </p>
          <p>Join us for weekly gatherings and community events.</p>
        </div>
      </div>
    </div>
  );
}
