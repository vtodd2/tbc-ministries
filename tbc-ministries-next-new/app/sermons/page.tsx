import { MediaEmbed } from "@/app/components/MediaEmbed";
import { SectionHeading } from "@/app/components/SectionHeading";

export default function SermonsPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Sermons" title="Recent messages" description="Timely teaching for the church." />
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <MediaEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Sermon 1" />
          <MediaEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Sermon 2" />
        </div>
      </div>
    </div>
  );
}
