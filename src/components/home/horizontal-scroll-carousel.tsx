'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import img1 from '@/assets/img1.webp';
import img2 from '@/assets/img2.webp';
import img3 from '@/assets/img3.webp';
import img5 from '@/assets/img5.jpeg';
import img7 from '@/assets/img7.webp';
import img6 from '@/assets/img6.webp';
import img8 from '@/assets/img8.webp';
import img9 from '@/assets/img9.webp';
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
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: img1.src,
    title: 'Terminals',
    id: 1,
    hint: 'cyberpunk terminal'
  },
  {
    url: img2.src,
    title: 'Cityscapes',
    id: 2,
    hint: 'cyberpunk city'
  },
  {
    url: img7.src,
    title: 'Abstract',
    id: 6,
    hint: 'abstract tech'
  },
  {
    url: img3.src,
    title: 'Circuits',
    id: 3,
    hint: 'glowing circuits'
  },
  {
    url: img5.src,
    title: 'Neovim',
    id: 4,
    hint: 'neovim code'
  },
  {
    url: img6.src,
    title: 'HUD',
    id: 5,
    hint: 'futuristic hud'
  },
  {
    url: img8.src,
    title: 'Data Flow',
    id: 7,
    hint: 'data stream'
  },
  {
    url: img9.src,
    title: 'Data Flow',
    id: 7,
    hint: 'data stream'
  },
];