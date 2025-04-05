
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { CheckCircle } from 'lucide-react';


const Overview = () => {
  return (
    <Section id="overview" className="min-h-[80vh] flex items-center justify-center relative bg-gradient-to-b from-[#F7F7F7] to-white border-t-2 border-t-white pt-16 pb-24">
      <div className="z-[-1] absolute top-[-168px] left-0 w-full h-[168px] z-10 bg-[url('/assets/Shadow_top.svg')] bg-cover bg-no-repeat bg-top"></div>

      <div className="order-1 md:order-2 block md:hidden">
        <img src="/assets/Overview.png" alt="Overview Image" className="relative bottom-[-2px] " />
      </div>

      <div className="grid relative md:grid-cols-2 gap-12 md:gap-16 items-center max-w-[1200px] bg-white rounded-2xl border-[#E5E5E5] border">

          <div className="order-1 md:order-2 hidden md:block ml-10 w-full h-full z-10">
            <img src="/assets/Overview.png" alt="Overview Image" className="md:absolute sm:relative bottom-[-2px] right-[-30%] md:right-[-15%]" />
          </div>

          <div className="order-2 md:order-1 max-w-[400px] p-[24px] md:max-w-full md:p-[40px] lg:p-[80px] z-20">

            <AnimatedText
            text="The Problem & Solution"
            element="h2"
            className="text-3xl md:text-3xl font-bold mb-2 max-w-48"
            />

            <AnimatedText
            text="Strata corporations must comply, Evalo makes it easy"
            element="h3"
            className="text-muted-foreground text-lg mb-12 max-w-72"
            delay={200}
            />

            <div className="grid gap-4 text-foreground mb-8 animate-fade-in">
            <div>
              With British Columbia’s new regulations, strata corporations must complete Depreciation Reports every five years, <strong>a process that has traditionally been manual</strong>, time-consuming, and inefficient.
            </div>
            <div>
              Evalo is the first platform built for firms conducting Building Assessments and Depreciation Reports, <strong>offering automated workflows</strong> that cut assessment time by over 60%.
            </div>
            </div>

          </div>
          </div>
    </Section>
  );
};

export default Overview;
