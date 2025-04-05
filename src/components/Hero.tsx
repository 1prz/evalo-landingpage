import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import iconBolt from '../icons/u_bolt-alt.svg';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative min-h-[80vh] max-h-[95vh] flex flex-col justify-between items-center text-center px-6 pt-[15vh] bg-cover bg-bottom bg-no-repeat"  style={{
    backgroundImage: 'url(assets/BG_hero.png)'
  }}>
      <div className="absolute x-0 y-0 w-full h-full bg-gradient-to-b from-white to-transparent  z-1">
        {/* <img src="/assets/Overview.png" alt="Overview Image" className="md:absolute sm:relative bottom-[-2px] right-[-30%] md:right-[-15%]" /> */}
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="absolute w-[50rem] h-[50rem] rounded-full bg-primary/5 -top-[20rem] -left-[20rem] animate-float" />
        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-primary/5 -bottom-[5rem] -right-[10rem] animate-float animate-delay-700" /> */}
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <h1 className={cn("text-center text-[36px] font-extrabold tracking-[0.2px] leading-none font-figtree transition-all duration-700 transform", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{
        transitionDelay: '100ms'
      }}>
          The future of building assessments Starts Here
        </h1>

        <p className={cn("text-[18px] text-[#52575C] text-center font-figtree font-normal leading-[120%] tracking-[-0.72px] max-w-2xl mx-auto my-10 transition-all duration-700 transform", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{
        transitionDelay: '200ms'
      }}>On-site assessments
/
Instant reports
/
Work smarter.</p>

        <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 transform", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{
        transitionDelay: '300ms'
      }}>
          {/* <Button size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#purchase'}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#overview'}>
            Learn More <ArrowRight size={16} className="ml-2" />
          </Button> */}
        </div>
        <div className="inline-block mb-6">
            <span className={cn("inline-flex items-center pr-4 pl-2 py-2 text-md font-medium border-2 border-black rounded-full transition-all duration-700 transform", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <img src={iconBolt} alt="AI Icon" className="w-6 h-6 mr-2" />
            AI-powered.
            </span>
        </div>
      </div>

      <div className={cn("flex items-start justify-center w-full overflow-hidden transition-all duration-700", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{
        transitionDelay: '400ms'
      }}>
        <div className="relative flex mx-auto">
          <img src="assets/floating_3.png" alt="AI Icon" className="absolute x-0 y-0 w-auto h-auto max-w-full max-h-full mb-[-10px] object-contain animate-float delay-500" />
          <img src="assets/floating_2.png" alt="AI Icon" className="absolute x-0 y-0 w-auto h-auto max-w-full max-h-full mb-[-10px] object-contain animate-float delay-200 z-20" />
          <img src="assets/ImageTopHero.png" alt="AI Icon" className="w-auto h-auto max-w-full max-h-full mb-[-10px] object-contain animate-float z-10" />
          <img src="assets/floating_1.png" alt="AI Icon" className="absolute x-0 y-0 w-auto h-auto max-w-full max-h-full mb-[-10px] object-contain animate-float delay-600" />
          <img src="assets/floating_0.png" alt="AI Icon" className="absolute x-0 y-0 w-auto h-auto max-w-full max-h-full mb-[-10px] object-contain animate-float delay-1000" />
        </div>
      </div>
    </section>;
};
export default Hero;
