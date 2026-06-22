import { SectionHeading } from "@/app/components/SectionHeading";

export default function CommunityPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Community" title="Join a community group" description="Connect with others for growth and support." />
        <div className="mt-8 text-slate-300">Community events and signups coming soon.</div>
      </div>
    </div>
  );
}
