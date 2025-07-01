import { Hero } from '@/components/home/hero';
import { AuthorIntro } from '@/components/home/author-intro';
import { ResourcesPreview } from '@/components/home/resources-preview';
import { SupportedDistros } from '@/components/home/supported-distros';
import { NewSection } from '@/components/home/new-section';
import { TechShowcase } from '@/components/home/tech-showcase';
import HorizontalScrollCarousel from '@/components/home/horizontal-scroll-carousel';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 md:gap-40 pb-24">
      <Hero />
      <AuthorIntro />
      <ResourcesPreview />
      <NewSection />
      <TechShowcase />
      <SupportedDistros />
      <HorizontalScrollCarousel />
    </div>
  );
}
