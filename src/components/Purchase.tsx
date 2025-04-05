
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import Button from './Button';
import { Check, ChevronRight } from 'lucide-react';

const Purchase = () => {
  return (
    <Section id="purchase" className="min-h-[80vh] flex items-center justify-center relative bg-gradient-to-b from-white to-[#F7F7F7] pt-16 pb-24">
      
      <div className="items-center max-w-[1200px] bg-white rounded-2xl border-[#E5E5E5] border p-[24px] md:max-w-full md:p-[40px] lg:p-[80px]">
        <div className="md:text-center mb-16">

          
          <AnimatedText
            text="Partner With Us"
            element="h2"
            className="text-3xl md:text-3xl font-bold mb-2"
          />
          
          <AnimatedText
            text="Own the future of automated building assessments"
            element="h3"
            className="text-muted-foreground text-lg max-w-80 mx-auto mb-8 md:mb-12"
            delay={200}
          />
        </div>

        <div className='flex flex-col items-center w-full gap-8 mb-8'>
          
          <div className='flex flex-col md:flex-row justify-between w-full gap-8 md:gap-1'>
            <div className='flex flex-col items-start justify-start max-w-72'>
              <h3 className="text-xl font-semibold mb-1">Acquisition Offer</h3>
              <p className="text-sm  text-muted-foreground">
                Own a first-to-market platform with unmatched automation capabilities.
              </p>
            </div>
            <div className='flex flex-col items-start justify-start md:items-end md:justify-start max-w-72'>
              <h3 className="text-xl font-semibold mb-1">Get in Touch</h3>
              <a
                href="https://linktr.ee/evalo_app"
                target='_blank'
                className="flex items-center justify-end gap-1 text-sm leading-none text-muted-foreground pl-2 pr-1 py-0.5 bg-white rounded-2xl hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                Hello@evalo.ca
                <img src="src/assets/emailSend.svg" alt="" />
              </a>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between w-full gap-8 md:gap-1'>
            <div className='flex flex-col items-start justify-start max-w-72'>
              <h3 className="text-xl font-semibold mb-1">Investment Opportunity</h3>
              <p className="text-sm  text-muted-foreground">
                Join an AI-driven property tech solution in a high-growth regulatory market.
              </p>
            </div>
            <div className='flex flex-col items-start justify-start md:items-end md:justify-start max-w-72'>
              <h3 className="text-xl font-semibold mb-1">Download Full Proposal</h3>
              <a
                href="https://langara-my.sharepoint.com/:b:/g/personal/lperezrojas00_mylangara_ca/EcHaLWSjyHdLh0mp_fwRjPYBaAiDpcm55sbmmCLaPz2sqA?e=iqVBB3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-1 text-sm leading-none text-muted-foreground pl-2 pr-1 py-0.5 bg-white rounded-2xl hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                EvaloProposal.pdf
                <img src="src/assets/Download.svg" alt="" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
};

export default Purchase;
