'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-85%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="text-center mb-24">
          <h2 className="font-headline text-4xl font-bold section-title">Visual Showcase</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto section-subtitle">
            A glimpse into the aesthetic possibilities.
          </p>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

type CardProps = {
  card: {
    url: string;
    title: string;
    id: number;
    hint: string;
  };
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg border border-primary/20 bg-card"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={card.hint}
      />
      <div className="absolute inset-0 z-10 grid place-content-center bg-black/40">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-5xl font-black uppercase text-white backdrop-blur-md">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
    {
    url: 'https://placehold.co/600x600.png',
    title: 'Terminals',
    id: 1,
    hint: 'cyberpunk terminal'
  },
  {
    url: 'https://placehold.co/600x600.png',
    title: 'Cityscapes',
    id: 2,
    hint: 'cyberpunk city'
  },
  {
    url: 'https://placehold.co/600x600.png',
    title: 'Circuits',
    id: 3,
    hint: 'glowing circuits'
  },
  {
    url: 'https://placehold.co/600x600.png',
    title: 'Neovim',
    id: 4,
    hint: 'neovim code'
  },
  {
    url: 'https://placehold.co/600x600.png',
    title: 'HUD',
    id: 5,
    hint: 'futuristic hud'
  },
  {
    url: 'https://placehold.co/600x600.png',
    title: 'Abstract',
    id: 6,
    hint: 'abstract tech'
  },
  {
    url: 'https://placehold.co/600x600.png',
    title: 'Data Flow',
    id: 7,
    hint: 'data stream'
  },
];