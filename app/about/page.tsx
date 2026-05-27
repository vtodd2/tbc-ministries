import { SectionHeader } from '../../components/SectionHeader';

export const metadata = {
  title: 'About | Kingdom Light Ministry',
  description: 'Learn the mission, vision, and leadership behind Kingdom Light Ministry.',
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader title="About Us" subtitle="A ministry rooted in faith, excellence, and modern generosity." />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Who We Are</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Cultivating worship, wisdom, and practical service.</h2>
          <p className="mt-6 leading-8 text-white/75">
            Kingdom Light Ministry exists to inspire Christians with a distinct blend of biblical teaching, refined design, and authentic outreach. We believe every believer can walk in both grace and excellence, and that every gift is an invitation to deeper community.
          </p>
        </div>
        <div className="space-y-8 text-white/75">
          <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8">
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-4 leading-7">To create a luxury worship experience that is accessible, inspiring, and deeply rooted in scripture.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8">
            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-4 leading-7">To equip believers with the tools, teaching, and support necessary for faithful leadership in every sphere of life.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8">
            <h3 className="text-xl font-semibold text-white">Our Values</h3>
            <ul className="mt-4 space-y-3 leading-7 text-white/70">
              <li>Integrity in ministry</li>
              <li>Excellence in communication</li>
              <li>Generosity in giving</li>
              <li>Clarity in teaching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
