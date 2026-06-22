import { SectionHeading } from "@/app/components/SectionHeading";
import { MediaEmbed } from "@/app/components/MediaEmbed";

export default function LivestreamPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Livestream" title="Watch our live services" description="Join us live every Sunday." />
        <div className="mt-8">
          <MediaEmbed src="https://www.youtube.com/embed/live_stream?channel=UC-placeholder" title="Livestream" />
        </div>
      </div>
    </div>
  );
}
