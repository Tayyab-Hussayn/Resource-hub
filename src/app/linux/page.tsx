'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Cpu, Wallpaper, ShieldCheck, Terminal } from "lucide-react";

// images from assets
import sddm from '@/assets/sddm.png';
import dotfiles from '@/assets/dotfiles.png';
import grub from '@/assets/grub.png';
import plymouth from '@/assets/plymouth.png';

const resourceCategories = [
  { id: 'all', label: 'All Goodies', icon: <Terminal className="w-4 h-4 mr-2"/> },
  { id: 'dotfiles', label: 'Dotfiles', icon: <Cpu className="w-4 h-4 mr-2"/> },
  { id: 'grub', label: 'GRUB Themes', icon: <ShieldCheck className="w-4 h-4 mr-2"/> },
  { id: 'plymouth', label: 'Plymouth', icon: <Wallpaper className="w-4 h-4 mr-2"/> },
  { id: 'sddm', label: 'SDDM Themes', icon: <Wallpaper className="w-4 h-4 mr-2"/> },
];

const resources = [
  {
    id: 1,
    category: 'dotfiles',
    title: 'Project: GhostNet',
    description: 'A stealth-optimized Zsh & Neovim config for deep system infiltration. Minimalist, fast, and untraceable.',
    thumbnail: dotfiles.src,
    hint: 'hacker terminal code'
  },
  {
    id: 2,
    category: 'grub',
    title: 'TRON-Legacy GRUB',
    description: 'Boot into the Grid with this animated Tron-themed GRUB loader. Features glowing light cycles and Recognizer art.',
    thumbnail: grub.src,
    hint: 'tron legacy grid'
  },
  {
    id: 3,
    category: 'plymouth',
    title: 'SystemCore Boot',
    description: 'A clean, minimalist boot-up sequence showing kernel module loading with a futuristic progress bar.',
    thumbnail: plymouth.src,
    hint: 'futuristic loading screen'
  },
  {
    id: 4,
    category: 'sddm',
    title: 'HoloLogin v2.1',
    description: 'A holographic login manager with glassmorphism effects and reactive particle animations. Secure and stylish.',
    thumbnail: sddm.src,
    hint: 'holographic ui'
  },
  {
    id: 5,
    category: 'dotfiles',
    title: 'ArchAngel Kitty',
    description: 'A highly customized Kitty terminal config with custom glyphs, GPU-accelerated rendering, and integrated tooling.',
    thumbnail: 'https://placehold.co/600x400.png',
    hint: 'custom terminal'
  },
  {
    id: 6,
    category: 'grub',
    title: 'BIOS Glitch Loader',
    description: 'A retro-inspired GRUB theme that mimics a classic BIOS screen with intentional glitch and data corruption effects.',
    thumbnail: 'https://placehold.co/600x400.png',
    hint: 'glitch screen effect'
  }
];

const AnimatedGridBackground = () => (
    <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-background" />
        <div 
            className="absolute inset-0 h-full w-full"
            style={{
                backgroundImage: `
                    linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '4rem 4rem',
                animation: 'moveGrid 20s linear infinite',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        <style jsx global>{`
            @keyframes moveGrid {
                from { background-position: 0 0; }
                to { background-position: -4rem -4rem; }
            }
            @keyframes glitch {
                2%, 64% { transform: translate(2px, 0) skew(0deg); }
                4%, 60% { transform: translate(-2px, 0) skew(0deg); }
                62% { transform: translate(0, 0) skew(5deg); }
            }
            .glitch-text::before,
            .glitch-text::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            .glitch-text::before {
                left: 2px;
                text-shadow: -2px 0 hsl(var(--accent));
                clip: rect(44px, 450px, 56px, 0);
                animation: glitch 4.2468s infinite linear alternate-reverse;
            }
            .glitch-text::after {
                left: -2px;
                text-shadow: -2px 0 hsl(var(--secondary)), 2px 2px hsl(var(--primary));
                clip: rect(86px, 450px, 140px, 0);
                animation: glitch 2.5698s infinite linear alternate-reverse;
            }
        `}</style>
    </div>
);

const ResourceCard = ({ item }: { item: typeof resources[0] }) => (
    <Card className="bg-card/30 backdrop-blur-sm border border-primary/10 overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
             <div
                style={{ backgroundImage: `url(${item.thumbnail})` }}
                className="absolute inset-0 bg-contain bg-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                data-ai-hint={item.hint}
                aria-label={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-muted-foreground mb-6 text-sm flex-grow">{item.description}</p>
            <Button className="w-full mt-auto group/button bg-primary/90 hover:bg-primary text-primary-foreground font-bold">
               <span className="group-hover/button:pr-2 transition-all">Download Protocol</span>
               <Download className="h-5 w-5 opacity-0 -translate-x-2 group-hover/button:opacity-100 group-hover/button:translate-x-0 transition-all duration-300"/>
            </Button>
        </CardContent>
    </Card>
);

export default function LinuxPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredResources = activeCategory === 'all'
        ? resources
        : resources.filter(r => r.category === activeCategory);

    return (
        <div className="relative min-h-screen">
            <AnimatedGridBackground />
            <div className="relative z-10 container mx-auto py-12 px-4">
                <div className="text-center mb-16">
                   <h1
                     className="glitch-text relative inline-block font-headline text-5xl md:text-7xl font-bold text-foreground"
                     data-text="LINUX"
                   >
                     RESOURCES
                   </h1>
                    <p className="text-muted-foreground mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                        Access the arsenal. Download high-integrity configs, themes, and system mods.
                    </p>
                </div>

                <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full flex justify-center mb-12">
                    <TabsList className="bg-card/50 backdrop-blur-sm border border-primary/20 h-auto p-1.5 rounded-lg flex flex-wrap justify-center">
                        {resourceCategories.map(cat => (
                            <TabsTrigger key={cat.id} value={cat.id} className="text-sm px-4 py-2 flex items-center rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30">
                                {cat.icon} {cat.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
                
                 <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     <AnimatePresence>
                        {filteredResources.map(item => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <ResourceCard item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
