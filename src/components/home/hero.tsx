'use client';

import { useEffect, useRef, Suspense, lazy, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Link from 'next/link';

const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto overflow-hidden group-hover:animate-shake">
      <Suspense fallback={<div className="w-full h-full bg-background" />}>
        <Spline
          style={{
            width: '120%',
            height: '120%',
            position: 'absolute',
            top: '-10%',
            left: '-10%',
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

const headings = [
  "Thhings you need for your Linux experience",
  "Your complete Linux toolkit starts here",
  
];
const typingSpeed = 50;
const pauseDuration = 2000;

const renderHeadingWithHighlight = (text: string) => {
    const parts = text.split(/(Linux)/gi);
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === 'linux' ? (
            <span key={index} className="text-primary">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
};

const Cursor = ({ isTyping }: { isTyping: boolean }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (isTyping) {
            setVisible(true);
            return;
        }

        const blinkInterval = setInterval(() => {
            setVisible(v => !v);
        }, 500);

        return () => clearInterval(blinkInterval);
    }, [isTyping]);

    return <span className={visible ? "opacity-100" : "opacity-0"}>|</span>
}


export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [headingIndex, setHeadingIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsTyping(true);
    setTypedHeading('');
    const currentHeading = headings[headingIndex];
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < currentHeading.length) {
        setTypedHeading(prev => prev + currentHeading.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        timeoutRef.current = setTimeout(() => {
          setHeadingIndex(prevIndex => (prevIndex + 1) % headings.length);
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [headingIndex]);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      const q = gsap.utils.selector(el);
      gsap.set(q('.hero-subtitle, .hero-button'), { autoAlpha: 0 });

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      timeline
        .fromTo(
          q('.hero-subtitle'),
          { y: 40 },
          { y: 0, autoAlpha: 1, duration: 1 },
          '+=1.5'
        )
        .fromTo(
          q('.hero-button'),
          { y: 30, scale: 0.9 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.8 },
          '-=0.8'
        );
    }
  }, []);

  return (
    <section ref={heroRef} className="relative group w-full flex flex-col items-center justify-center text-center min-h-screen">
      <HeroSplineBackground />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="hero-title font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground max-w-4xl mx-auto min-h-[80px] md:min-h-[140px] lg:min-h-[200px]">
          {renderHeadingWithHighlight(typedHeading)}
          <Cursor isTyping={isTyping} />
        </h1>
        <p className="hero-subtitle mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          A comprehensive, curated hub for Linux customization resources. Find beautiful themes, powerful configs, and cutting-edge AI tools to elevate your setup.
        </p>
        <div className="hero-button mt-8">
          <Link
            href="/linux"
            className="group/button inline-block rounded-lg bg-gradient-to-r from-secondary via-primary to-accent p-1 text-lg shadow-lg shadow-primary/20 transition hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="flex items-center justify-center rounded-md bg-background/90 px-8 py-3 text-foreground transition-colors group-hover/button:bg-background/80">
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
