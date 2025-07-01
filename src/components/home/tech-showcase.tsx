'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CpuArchitecture from '@/components/ui/cpu-architecture';

gsap.registerPlugin(ScrollTrigger);

export function TechShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
        gsap.fromTo(el, 
            { autoAlpha: 0, y: 50 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            }
        );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 scale-[0.95]">
          <CpuArchitecture text="VINCRE" />
        </div>
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative mt-32">
        <h2 className="font-headline text-4xl font-bold section-title">Powered by Cutting-Edge Tech</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl mx-auto section-subtitle">
          This platform is built on a modern, robust stack to ensure a fast, reliable, and seamless experience. We leverage the best of open-source to deliver high-quality resources for your Linux journey.
        </p>
      </div>
      <style>{`
        .cpu-architecture {
          offset-anchor: 10px 0px;
          animation: animation-path;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.75, -0.01, 0, 0.99);
        }

        .cpu-line-1 {
          offset-path: path("M 68 144 h 540.6 q 34 0 34 34 v 216");
          animation-duration: 5s;
          animation-delay: 1s;
        }

        .cpu-line-2 {
          offset-path: path("M 1224 72 h -474.36 q -34 0 -34 34 v 288");
          animation-delay: 6s;
          animation-duration: 2s;
        }

        .cpu-line-3 {
          offset-path: path("M 884 144 v 148.32 q 0 34 -34 34 h -170");
          animation-delay: 4s;
          animation-duration: 6s;
        }

        .cpu-line-4 {
          offset-path: path("M 1156 576 v -148.32 q 0 -34 -34 -34 h -442");
          animation-delay: 3s;
          animation-duration: 3s;
        }

        .cpu-line-5 {
          offset-path: path(
            "M 918 468 h 102 q 34 0 34 34 v 72 q 0 34 -34 34 h -270.64 q -34 0 -34 -34 v -252"
          );
          animation-delay: 9s;
          animation-duration: 4s;
        }

        .cpu-line-6 {
          offset-path: path("M 644.64 684 v -331.2");
          animation-delay: 3s;
          animation-duration: 7s;
        }

        .cpu-line-7 {
          offset-path: path(
            "M 598.4 633.6 v -108 q 0 -34 -34 -34 h -68 q -34 0 -34 -34 v -36 q 0 -34 34 -34 h 190.4"
          );
          animation-delay: 4s;
          animation-duration: 4s;
        }

        .cpu-line-8 {
          offset-path: path("M 204 216 h 170 q 34 0 34 34 v 46.8 q 0 34 34 34 h 238");
          animation-delay: 3s;
          animation-duration: 3s;
        }

        .cpu-line-9 {
          offset-path: path("M 400 650 v -200 q 0 -34 34 -34 h 150");
          animation-delay: 2s;
          animation-duration: 5s;
        }

        .cpu-line-10 {
          offset-path: path("M 900 100 v 150 q 0 34 -34 34 h -100");
          animation-delay: 5s;
          animation-duration: 4s;
        }

        @keyframes animation-path {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
      `}</style>
    </section>
  );
}
