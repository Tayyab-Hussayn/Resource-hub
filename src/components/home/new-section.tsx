'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';

gsap.registerPlugin(ScrollTrigger);

export function NewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
        gsap.set(el.children, { autoAlpha: 0, y: 50 });
        gsap.to(el.children, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
        });
    }
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold section-title">Core Features</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto section-subtitle">
          Everything you need for a powerful and personalized Linux experience.
        </p>
      </div>
      <div className="border rounded-lg border-border">
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}
