import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import InteractiveMenu from '@/components/InteractiveMenu';
import CTA from '@/components/CTA';
import FireBackground from '@/components/FireBackground';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0A0A0A] text-[#FAF9F6] font-inter">
        {/* Optional particle background */}
        <FireBackground />
        {/* Sections */}
        <Hero />
        <BentoGrid />
        <InteractiveMenu />
        <CTA />
      </div>
    </SmoothScroll>
  );
}
