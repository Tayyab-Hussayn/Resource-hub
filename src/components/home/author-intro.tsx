'use client';

import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import author from '../../assets/author.jpg'; // adjust the path as needed
gsap.registerPlugin(ScrollTrigger);

export function AuthorIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.set(el, { autoAlpha: 0, y: 50 });
      
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      const card = el.querySelector('.author-card');
      if (card) {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' }));
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' }));
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="max-w-5xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10 author-card">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center gap-8 p-4">
            <Avatar className="h-40 w-40 border-4 border-primary">
              <AvatarImage src={author.src} alt="Author's Picture" data-ai-hint="profile picture" />
               
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="font-headline text-3xl text-primary">About the Creator</CardTitle>
              <p className="mt-2 text-muted-foreground">
                Hi, I'm the creator of this hub. As a passionate Linux user and developer, I wanted to build a central place for high-quality customization resources and innovative tools that I use in my daily workflow.
              </p>
              <div className="mt-4 flex justify-center md:justify-start gap-4">
                <Link href="https://github.com/tayyab-hussayn" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
                <Link href="https://www.linkedin.com/in/tayyabhussayn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </section>
  );
}
