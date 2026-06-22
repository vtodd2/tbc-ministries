import { DonationPlaceholders } from "@/app/components/DonationPlaceholders";
import { SectionHeading } from "@/app/components/SectionHeading";

export default function DonationsPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Give" title="Support the ministry" description="Your generosity powers our mission." />
        <div className="mt-8">
          <DonationPlaceholders />
        </div>
      </div>
    </div>
  );
}
