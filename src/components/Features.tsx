
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { Layers, Shield, Zap, Users, LineChart, Lightbulb, Gauge, Scale, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Gauge,
    title: '80% Faster Report Creation',
    description: 'Cut report creation time from 20 to 4 hours with our automated workflow.'
  },
  {
    icon: Scale,
    title: 'Built for BC compliance',
    description: 'Meets Strata Property Act requirements for effortless regulatory alignment.'
  },
  {
    icon: Brain,
    title: 'Smart Data Capture',
    description: 'Record photos, notes, and voice memos—Evalo organizes it all instantly.'
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className="flex justify-center items-center gap-3"
      style={{ animationDelay: `${100 + (index * 100)}ms` }}
    >
      <div className="w-12 h-12 text-primary">
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <h3 className="text-md font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <Section id="features" className='relative min-h-[80vh] flex items-center justify-center py-[40px] md:py-[80px] lg:py-[200px]'>

      <div className='absolute hidden md:flex items-center justify-center top-0 left-0 z-20 w-full h-full [background-image:linear-gradient(135deg,_white,_transparent)]'>
        <div className='flex justify-end items-center w-full max-w-[1200px] h-full'>
          <img src="/assets/Features.png" alt="" className='h-full max-h-[1200px] animate-float' />
        </div>
      </div>

      <div className="relative grid md:grid-cols-2 gap-12 md:gap-16 justify-center items-center max-w-[1200px] bg-white rounded-[16px] border-2 border-dashed border-[#F7F7F7] p-8
  before:absolute before:inset-[-34px] before:border-2 before:border-dashed before:border-[#F7F7F7] before:rounded-[50px] before:-z-10
  after:absolute after:inset-[-68px] after:border-2 after:border-dashed after:border-[#F7F7F7] after:rounded-[84px] after:-z-20">

        <div className="order-2 max-w-[400px] md:max-w-full p-[24px] md:p-[40px] lg:p-[80px] z-20">

          <div className="mb-16">

            {/* <div className="inline-block mb-2">
              <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
                Features
              </span>
            </div> */}

            <AnimatedText
              text="Why Choose Evalo?"
              element="h2"
              className="text-3xl md:text-3xl font-bold mb-2 max-w-48"
            />

            <AnimatedText
              text="Save time. Eliminate paperwork. automate reporting."
              element="h3"
              className="text-muted-foreground text-lg mb-12 max-w-72"
              delay={200}
            />
          </div>

          <div>
            <div className='grid grid-cols-1 gap-5'>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>

        <div className="order-1  flex items-center justify-center md:hidden w-full h-1/2">
            <img src="/assets/Features.png" alt="Feature Image" className=" mt-[-60%] mb-[-50px] w-full max-w-[550px]" />
        </div>

      </div>

    </Section>
  );
};

export default Features;
