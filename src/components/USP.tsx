
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { ArrowRight, ClipboardCheck, Video, Zap } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';


const icons = {
  ClipboardCheck,
  Video,
  Zap,
};

const sellingPoints = [
  {
    id: 'design',
    title: 'Unparalleled Design',
    description: 'Every pixel meticulously crafted to create a cohesive and beautiful experience. Our design language combines aesthetics with functionality.',
    cta: 'Explore our design',
    imageBg: 'bg-[#faf5ff]',
    icon: 'ClipboardCheck'
  },
  {
    id: 'performance',
    title: 'Exceptional Performance',
    description: 'Built with performance in mind from the ground up. Fast loading times, smooth animations, and responsive interactions that feel instantaneous.',
    cta: 'See the numbers',
    imageBg: 'bg-[#eef2ff]',
    icon: 'Video'
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: "Our team of experts is always available to help. From implementation to troubleshooting, we're with you every step of the way.",
    cta: 'Get support',
    imageBg: 'bg-[#f0fdf4]',
    icon: 'Zap'
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
    <Section id="usp" className="relative min-h-[80vh] flex items-center justify-center py-[40px] md:py-[80px] lg:py-[200px] ">
      <div className='max-w-[1200px] bg-[#F7F7F7] rounded-2xl border-[#F1F1F1] border p-[24px] md:p-[40px] lg:p-[80px]'>
        <div className=" text-center mb-16">
          
          <div className='pb-12'>
            <img src="src/assets/LogoIcon_Features.svg" alt="AI Icon" className="w-24 h-24 mx-auto" />
          </div>
          
          <div className="inline-block mb-2">
            <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
              Why Choose Us
            </span>
          </div>
          
          <AnimatedText
            text="Transforming the Assessment Process"
            element="h2"
            className="text-3xl font-bold mb-2 max-w-80 text-center mx-auto"
          />
          
          <AnimatedText
            text="The tools you need, in one place"
            element="h3"
            className="text-muted-foreground text-lg mb-12 max-w-80 text-center mx-auto"
            delay={200}
          />
        </div>
        
        <div className="grid lg:grid-cols-1 items-center">
          <div className="order-1">
            <div className="flex justify-center items-center self-center gap-8 space-y-3 mb-8">
              

              
              {sellingPoints.map((point) => (
                <div className="flex flex-col gap-2 items-start self-stretch min-h-[400px] w-full p-6 bg-white rounded-lg transition-all duration-300">
                  
                  <div className='flex flex-col items-start justify-center gap-4'>
                  
                    {icons[point.icon as keyof typeof icons] && (
                      <span className="text-primary">
                        {React.createElement(icons[point.icon as keyof typeof icons], { size: 40 })}
                      </span>
                    )}
                    <h3 className='text-foreground text-bold text-lg leading-1.5 text-left'>{point.title}</h3>
                    <p className=''>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-2 -1 h-full px-10">
            <div className="bg-black mt-[-80px] p-1 relative w-full overflow-hidden rounded-3xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.06),_0px_16px_40px_0px_rgba(0,0,0,0.30)]">
              <video
                src="/src/assets/evalovideos.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default USP;
