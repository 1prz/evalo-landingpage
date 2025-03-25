
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { CheckCircle } from 'lucide-react';

const keyPoints = [
  'Focus on essential functionality',
  'Refined, distraction-free interface',
  'Thoughtful, intuitive navigation',
  'Elegant visual design language',
  'Accessibility-first approach',
  'Performance optimized experience',
];

const Overview = () => {
  return (
    <Section id="overview" className="bg-accent/50">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl animate-float" />
            <div className="absolute inset-4 glass rounded-2xl overflow-hidden">
              {/* Content placeholder */}
              <div className="h-full w-full bg-white/30 p-6 flex flex-col">
                <div className="w-1/2 h-4 bg-primary/10 rounded-full mb-4" />
                <div className="w-full h-6 bg-primary/10 rounded-full mb-6" />
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-primary/5 flex items-center justify-center animate-pulse">
                      <div className="w-8 h-8 rounded-full bg-primary/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="inline-block mb-2">
            <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
              Overview
            </span>
          </div>
          
          <AnimatedText
            text="Simplicity is the ultimate sophistication"
            element="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          
          <AnimatedText
            text="Our approach combines elegance with functionality, creating a seamless experience that puts your needs at the center of every design decision."
            element="p"
            className="text-muted-foreground mb-8"
            delay={200}
          />
          
          <div className="space-y-3">
            {keyPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${200 + (index * 100)}ms` }}
              >
                <CheckCircle className="text-primary/70 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Overview;
