"use client";

import { useEffect, useRef } from 'react';
import { Cog, Palette, Bot, Film } from "lucide-react";
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const resourceCategories = [
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    title: "Linux Config Files",
    description: "Access a curated collection of dotfiles for Kitty, Zsh, Neovim, and more to supercharge your terminal and editor workflows.",
    href: "/linux#configs"
  },
  {
    icon: <Palette className="h-10 w-10 text-secondary" />,
    title: "Theme Collections",
    description: "Transform your desktop's entire look. Discover beautiful and cohesive themes for GRUB, Plymouth, SDDM, and other system components.",
    href: "/linux#themes"
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: "AI Development Tools",
    description: "Enhance your coding with cutting-edge AI. Leverage powerful tools like code assistants and AI-integrated environments to write better code, faster.",
    href: "/linux#ai-dev"
  },
  {
    icon: <Film className="h-10 w-10 text-primary" />,
    title: "AI Creative Tools",
    description: "Unleash your creative potential with AI. Explore a handpicked list of applications for generating stunning images and videos.",
    href: "/linux#ai-creative"
  }
];

export function ResourcesPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      const q = gsap.utils.selector(el);
      const title = q(".section-title");
      const subtitle = q(".section-subtitle");
      const cards = q(".resource-card");

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
        <h2 className="font-headline text-4xl font-bold section-title">What You'll Find Here</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto section-subtitle">A curated collection of resources to build your perfect Linux desktop.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resourceCategories.map((category) => (
          <Link key={category.title} href={category.href} className="block h-full resource-card">
            <Card className="flex flex-col justify-between p-6 text-center h-full bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg">
              <div>
                <div className="mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="font-headline text-2xl font-bold text-foreground">{category.title}</h3>
                <p className="text-muted-foreground mt-4 text-base">{category.description}</p>
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
