import { PodcastEmbed } from "@/app/components/PodcastEmbed";
import { SectionHeading } from "@/app/components/SectionHeading";

export default function PodcastPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Podcast" title="Conversations that matter" description="Listen to our latest episodes." />
        <div className="mt-8 grid gap-6">
          <PodcastEmbed src="https://open.spotify.com/embed-podcast/show/placeholder" title="TBC Podcast" />
        </div>
      </div>
    </div>
  );
}
