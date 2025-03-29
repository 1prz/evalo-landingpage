
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

const sellingPoints = [
  {
    id: 'design',
    title: 'Unparalleled Design',
    description: 'Every pixel meticulously crafted to create a cohesive and beautiful experience. Our design language combines aesthetics with functionality.',
    cta: 'Explore our design',
    imageBg: 'bg-[#faf5ff]'
  },
  {
    id: 'performance',
    title: 'Exceptional Performance',
    description: 'Built with performance in mind from the ground up. Fast loading times, smooth animations, and responsive interactions that feel instantaneous.',
    cta: 'See the numbers',
    imageBg: 'bg-[#eef2ff]'
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: "Our team of experts is always available to help. From implementation to troubleshooting, we're with you every step of the way.",
    cta: 'Get support',
    imageBg: 'bg-[#f0fdf4]'
  }
];

const USP = () => {
  const [activePoint, setActivePoint] = useState(sellingPoints[0].id);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-rotate through the USPs
    intervalRef.current = setInterval(() => {
      setActivePoint((current) => {
        const currentIndex = sellingPoints.findIndex(p => p.id === current);
        const nextIndex = (currentIndex + 1) % sellingPoints.length;
        return sellingPoints[nextIndex].id;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Stop auto-rotation when user interacts
  const handlePointClick = (id: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActivePoint(id);
  };

  const activePointData = sellingPoints.find(p => p.id === activePoint) || sellingPoints[0];

  return (
    <Section id="usp" className="bg-accent/50">
      <div className="text-center mb-16">
        <div className="inline-block mb-2">
          <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
            Why Choose Us
          </span>
        </div>
        
        <AnimatedText
          text="What sets us apart"
          element="h2"
          className="text-3xl md:text-4xl font-bold mb-6"
        />
        
        <AnimatedText
          text="Discover the unique advantages that make our solution the preferred choice."
          element="p"
          className="text-muted-foreground max-w-2xl mx-auto"
          delay={200}
        />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-3 mb-8">
            {sellingPoints.map((point) => (
              <button
                key={point.id}
                onClick={() => handlePointClick(point.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-all duration-300",
                  activePoint === point.id
                    ? "bg-white shadow-md"
                    : "hover:bg-white/50"
                )}
              >
                <h3 className={cn(
                  "text-xl font-semibold mb-2 transition-colors",
                  activePoint === point.id ? "text-primary" : ""
                )}>
                  {point.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground transition-opacity duration-500",
                  activePoint === point.id ? "opacity-100" : "opacity-70 line-clamp-1"
                )}>
                  {point.description}
                </p>
                
                {activePoint === point.id && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-3 text-primary px-0 hover:bg-transparent hover:text-primary/80"
                  >
                    {point.cta} <ArrowRight size={14} className="ml-1" />
                  </Button>
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2 h-full">
          <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-xl">
            {sellingPoints.map((point) => (
              <div
                key={point.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 flex items-center justify-center",
                  point.imageBg,
                  activePoint === point.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                )}
              >
                {/* Placeholder for image/illustration for each USP */}
                <div className="w-2/3 aspect-square rounded-full bg-white/50 flex items-center justify-center">
                  <div className="text-6xl font-light text-primary/30">{point.id.charAt(0).toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default USP;
