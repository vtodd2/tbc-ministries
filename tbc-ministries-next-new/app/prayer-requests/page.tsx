import { PrayerForm } from "@/app/components/PrayerForm";
import { SectionHeading } from "@/app/components/SectionHeading";

export default function PrayerRequestsPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Prayer" title="Submit a prayer request" description="Our pastoral team prays over every request." />
        <div className="mt-8">
          <PrayerForm />
        </div>
      </div>
    </div>
  );
}
