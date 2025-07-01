'use client';

import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArchLogo = () => (
  <svg width="48" height="48" viewBox="0 0 225.77 225.77" fill="currentColor" className="text-cyan-400">
    <path d="M112.88,0C87.4,0,62.1,10.05,42.27,27.56L112.88,98.17l70.61-70.61C163.67,10.05,138.37,0,112.88,0Z"/>
    <path d="M27.56,42.27C10.05,62.1,0,87.4,0,112.88s10.05,50.78,27.56,70.61l70.61-70.61L27.56,42.27Z"/>
    <path d="M112.88,225.77c25.48,0,50.78-10.05,70.61-27.56L112.88,127.6l-70.61,70.61C62.1,215.72,87.4,225.77,112.88,225.77Z"/>
    <path d="M225.77,112.88c0-25.48-10.05-50.78-27.56-70.61l-70.61,70.61,70.61,70.61C215.72,163.67,225.77,138.37,225.77,112.88Z"/>
  </svg>
);

const FedoraLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM24 41C14.63 41 7 33.37 7 24C7 16.5 12.08 10.09 19 8.2V24H33C33 33.37 25.37 41 24 41Z" fill="#294172"/>
    <path d="M21 8.05C28.2 9.56 34.03 15.68 34.91 23H21V8.05Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1"/>
  </svg>
);

const DebianLogo = () => (
  <svg width="48" height="48" viewBox="0 0 540 540" fill="currentColor" className="text-red-500">
    <path d="m269.83 0c-1.63 0-3.25 0.04-4.88 0.11-47.51 2.2-82.23 16.48-108.57 40.54-36.87 33.68-57.34 83.28-57.34 145.48 0 53.64 15.34 94.04 42.16 125.73 28.53 33.72 69.21 51.55 124.62 51.55 49.38 0 88.54-13.43 118.84-40.23 21.6-19.14 36.33-44.57 45.45-76.32 8.71-29.6 13.01-63.53 13.01-101.8 0-47.52-6.52-84.34-19.57-110.46-17.77-35.48-48.43-57.47-92.41-65.73-10.45-1.98-21.2-2.96-32.22-2.96-1.52 0-3.04 0.02-4.56 0.05zm14.12 41.59c36.19 7.42 61.12 26.04 75.33 55.45 12.22 24.96 18.06 58.8 18.06 103.35 0 36.75-4.12 69.2-12.37 97.32-8.62 29.17-22.38 52.68-39.29 69.03-26.68 25.4-60.89 37.94-106.32 37.94-49.33 0-85.1-16.2-109.89-45.92-23.47-28.14-36.94-64.84-36.94-112.55 0-56.98 18.39-102.2 52.34-133.02 24.12-21.99 55.77-35.15 97.46-37.15 5.86-0.28 11.75-0.43 17.63-0.43 8.33 0 16.65 0.23 24.98 0.69v196.4c-22.14-26.37-33.2-51.48-33.2-75.33 0-38.3 16.4-66.71 49.2-85.22z"/>
  </svg>
);

const NixOSLogo = () => (
    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="text-sky-400">
        <path d="M185.3,49.8c-11-5.2-22.9-7.8-35.1-7.8c-18.3,0-36.7,5.5-52.1,15.7c-9.5,6.3-17.4,14.6-23.4,24.4l43,24.9l20-34.5 l-9.5-5.5c3.2-2.4,6.6-4.6,10.2-6.5c11.6-6.1,25-9.4,38.9-9.4c10.2,0,20.1,1.9,29.4,5.4l11.4-19.7C203.4,53.4,194.5,51.3,185.3,49.8z" />
        <path d="M211.4,103.8l-11.4,19.7c-2-1-4-1.9-6.1-2.8c-11.6-5.2-24.1-8-37.1-8c-10.8,0-21.2,1.9-30.9,5.5l-20,34.5l43,24.9 c6.8-10.4,12-21.7,15.3-33.5c1.7-6,2.7-12.2,2.7-18.4c0-3.3-0.3-6.6-0.8-9.8L211.4,103.8z" />
        <path d="M102,176.4l-43-24.9c-6,9.8-10.2,20.4-12.5,31.7c-1.3,6.2-1.9,12.5-1.9,18.9c0,18.3,5.5,36.7,15.7,52.1 c6.3,9.5,14.6,17.4,24.4,23.4l24.9-43l-34.5-20l-5.5,9.5c-2.4-3.2-4.6-6.6-6.5-10.2C59.9,201.8,56.6,188.4,56.6,174.5 c0-10.2,1.9-20.1,5.4-29.4L102,176.4z" />
        <path d="M44.6,152.2l19.7,11.4c-1,2-1.9,4-2.8,6.1c-5.2,11.6-8,24.1-8,37.1c0,10.8,1.9,21.2,5.5,30.9l34.5,20l24.9-43 c-10.4-6.8-21.7-12-33.5-15.3c-6-1.7-12.2-2.7-18.4-2.7c-3.3,0-6.6,0.3-9.8,0.8L44.6,152.2z" />
    </svg>
);

const distros = [
  { name: "Arch Linux", logo: <ArchLogo />, note: "Experience the power and flexibility of a rolling release. Arch Linux provides the latest stable software versions and a minimalist base system, empowering you to build a custom environment tailored to your exact needs from the ground up.", href: "#" },
  { name: "Fedora", logo: <FedoraLogo />, note: "Stay on the forefront of open-source innovation with Fedora. It delivers the latest features, a modern GNOME desktop, and cutting-edge technologies with a strong focus on security and developer experience, all backed by the community and Red Hat.", href: "#" },
  { name: "Debian", logo: <DebianLogo />, note: "Rely on the rock-solid foundation of 'The Universal Operating System'. Debian is renowned for its exceptional stability, extensive software repositories, and commitment to free software, making it a dependable choice for both servers and desktops.", href: "#" },
  { name: "NixOS", logo: <NixOSLogo />, note: "Embrace a revolutionary approach to system management with NixOS. Its unique declarative model ensures your system is reproducible, reliable, and easily manageable, allowing for atomic upgrades and rollbacks, eliminating package conflicts.", href: "#" }
];

export function SupportedDistros() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      const q = gsap.utils.selector(el);
      const title = q(".section-title");
      const subtitle = q(".section-subtitle");
      const cards = q(".distro-card");

      gsap.set([title, subtitle, ...cards], { autoAlpha: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' }
      });

      tl.to(title, { autoAlpha: 1, y: 0, duration: 0.8 })
        .to(subtitle, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(cards, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.2 }, "-=0.5");

      cards.forEach(card => {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' }));
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }));
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold section-title">Supported Distributions</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto section-subtitle">While many configs are universal, these distros are officially supported and tested.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {distros.map((distro) => (
          <Link key={distro.name} href={distro.href} className="block h-full distro-card">
            <Card className="bg-card/30 backdrop-blur-sm border-border flex flex-col p-6 text-center shadow-lg h-full">
              <div className="flex-grow">
                <div className="mb-4 flex justify-center">{distro.logo}</div>
                <h3 className="font-headline text-xl font-semibold text-foreground">{distro.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{distro.note}</p>
              </div>
              <div className="mt-8">
                <div className="group/button inline-block rounded-lg bg-gradient-to-r from-secondary via-primary to-accent p-0.5 text-base shadow-lg shadow-primary/20 transition hover:shadow-xl hover:shadow-primary/30">
                  <span className="block rounded-md bg-background/90 px-8 py-3 text-foreground transition-colors group-hover/button:bg-background/80">
                    Explore
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
