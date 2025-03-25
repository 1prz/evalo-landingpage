
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[50rem] h-[50rem] rounded-full bg-primary/5 -top-[20rem] -left-[20rem] animate-float" />
        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-primary/5 -bottom-[5rem] -right-[10rem] animate-float animate-delay-700" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <span 
            className={cn(
              "inline-block px-4 py-1.5 text-sm font-medium bg-accent rounded-full transition-all duration-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            The Future is Minimal
          </span>
        </div>
        
        <h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-gradient transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Elevating Simplicity<br />Through Perfect Design
        </h1>
        
        <p 
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: '200ms' }}
        >
          A refined experience built on the principles of exceptional design and attention to detail. 
          Less distraction, more function.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: '300ms' }}
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => window.location.href = '#purchase'}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => window.location.href = '#overview'}
          >
            Learn More <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
