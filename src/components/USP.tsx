
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { ArrowRight, ClipboardCheck, Mic, Sparkles, Video, Zap } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';


const icons = {
  ClipboardCheck,
  Video,
  Zap,
  Mic,
  Sparkles,
};

const sellingPoints = [
  {
    id: 'performance',
    title: ' AI-Enhanced Voice to Text',
    description: ['Turn on-site conversations and spoken notes into editable transcripts fast and accurately.'],
    cta: 'See the numbers',
    imageBg: 'bg-[#eef2ff]',
    icon: 'Mic'
  },
  {
    id: 'design',
    title: 'Smart Records',
    description: ['Capture everything on-site; photos, text, and audio, and let Evalo build your report for you.',],
    cta: 'Explore our design',
    imageBg: 'bg-[#faf5ff]',
    icon: 'Zap'
  },
  {
    id: 'support',
    title: 'Report Generation',
    description: ['Create and deliver professional-grade assessment and depreciation reports in seconds.',],
    cta: 'Get support',
    imageBg: 'bg-[#f0fdf4]',
    icon: 'Sparkles'
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

      <div className='max-w-[1200px] bg-[#F7F7F7] mx-auto rounded-2xl border-[#F1F1F1] border p-[24px] md:p-[40px] lg:p-[80px]'>

        <div className=" text-center mb-16">

          <div className='pb-12'>
            <img src="assets/LogoIcon_Features.svg" alt="AI Icon" className="w-24 h-24 mx-auto" />
          </div>

          {/* <div className="inline-block mb-2">
            <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
              Why Choose Us
            </span>
          </div> */}

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

        <div className="grid lg:grid-cols-1 items-center ">
          <div className="order-1">
            <div className="flex flex-col md:flex-row justify-center items-stretch self-center gap-8 mb-8">



              {sellingPoints.map((point) => (
                <div className="flex flex-col gap-2 items-start justify-between w-full h-full  md:pb-[100px] p-6 bg-white rounded-lg ">

                  <div className='flex flex-col items-start justify-start gap-4 flex-grow'>

                    {icons[point.icon as keyof typeof icons] && (
                      <span className="text-primary">
                        {React.createElement(icons[point.icon as keyof typeof icons], { size: 40 })}
                      </span>
                    )}
                    <h3 className='text-foreground text-bold text-lg leading-1.5 text-left'>{point.title}</h3>
                    {Array.isArray(point.description) ? (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {point.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{point.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex md:hidden order-2 -1 h-full md:px-10">
            <div className="md:mt-[-100px] relative w-full overflow-hidden rounded-sm md:rounded-3xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.06),_0px_16px_40px_0px_rgba(0,0,0,0.30)]">
              <video
                src="/assets/evalovideos.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto object-cover rounded-sm md:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex order-2 -1 h-full ">
            <div className="md:mt-[-140px] lg:mt-[-180px] mx-auto md:max-w[70vw] lg:max-w-[75vw] relative w-full overflow-hidden rounded-sm md:rounded-3xl shadow-[0px_6px_16px_0px_rgba(0,0,0,0.06),_0px_16px_40px_0px_rgba(0,0,0,0.30)]">
              <video
                src="/assets/Video/evalovideo.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto object-cover rounded-sm md:rounded-3xl"
              />
            </div>
          </div>
    </Section>
  );
};

export default USP;
