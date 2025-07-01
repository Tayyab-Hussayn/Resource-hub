"use client";
import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconDownload,
  IconGift,
  IconShieldCheck,
  IconLayersIntersect,
  IconRefresh,
  IconUsers,
  IconHeart,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for Linux Enthusiasts",
      description: "Crafted for system administrators, developers, rice enthusiasts, and everyday Linux users who love customization.",
      icon: <IconTerminal2 className="w-8 h-8" />,
    },
    {
      title: "Simple & Fast Downloads",
      description: "It's as easy as clicking download. No registration required, no complicated steps - just get what you need instantly.",
      icon: <IconDownload className="w-8 h-8" />,
    },
    {
      title: "Completely Free Resources",
      description: "All configurations, themes, and tools are completely free. No premium tiers, no hidden costs, no credit card required.",
      icon: <IconGift className="w-8 h-8" />,
    },
    {
      title: "Quality Guaranteed",
      description: "Every configuration is tested and verified. We ensure compatibility and functionality across supported distributions.",
      icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Multi-Distro Support",
      description: "Supporting Arch, Fedora, Debian, NixOS and more. Share configurations across different distributions seamlessly.",
      icon: <IconLayersIntersect className="w-8 h-8" />,
    },
    {
      title: "Always Updated",
      description: "Our configurations stay current with the latest package versions. Fresh themes and tools added regularly.",
      icon: <IconRefresh className="w-8 h-8" />,
    },
    {
      title: "Community Driven",
      description: "If something doesn't work perfectly, our community helps. Contribute your own configs and help fellow Linux users.",
      icon: <IconUsers className="w-8 h-8" />,
    },
    {
      title: "And Everything Else",
      description: "I just ran out of features to mention. Accept my sincere commitment to making Linux beautiful and functional.",
      icon: <IconHeart className="w-8 h-8" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l-0",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-card to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-card to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
