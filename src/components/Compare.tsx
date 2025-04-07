import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import iconCheck from '../icons/u_check.svg';
import iconMinusCircle from '../icons/u_minus-circle.svg';
import iconTimesCircle from '../icons/u_times-circle.svg';
import iconCheckGrey from '../icons/u_check-grey.svg';
import iconTimesCircleGrey from '../icons/u_times-circle-grey.svg';
import Table1 from '../icons/Table_1.svg'
import Table2 from '../icons/Table_2.png'
import Table3 from '../icons/Table_3.svg'
import Table4 from '../icons/Table_4.svg'

const Compare = () => {
  return (
    <Section id="overview" className="min-h-[80vh] flex items-center justify-center relative pt-16 pb-24">
        <div className="flex flex-col justify-center items-start max-w-[1200px] p-[24px] md:p-[40px] lg:p-[80px] bg-white rounded-[16px]">

          <div className="text-left max-w-[400px] md:max-w-full z-20">
            <AnimatedText
            text="How Evalo stands Out"
            element="h2"
            className="text-3xl md:text-3xl font-bold mb-2"
            />

            <AnimatedText
            text="Why Evalo is the smartest choice for your firm"
            element="h3"
            className="text-muted-foreground text-lg mb-12"
            delay={200}
            />
            </div>

            <div className="w-full h-full overflow-x-scroll md:overflow-auto z-10">
                <div className="grid grid-rows-6 grid-cols-5 w-full h-full min-w-[600px]">

                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-start text-color-[#5D6368] p-2">
                            <div className="flex items-start space-x-2">
                                <span className="text-sm text-[#5D6368] max-w-32 text-left">Features </span>
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-1">
                            <div className="flex items-center space-x-2 w-full h-full relative">
                                <img src={Table1} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={Table2} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={Table3} alt="" />
                            </div>
                        </div>
                        <div className="border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={Table4} alt="" />
                            </div>
                        </div>

                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-start text-color-[#5D6368] p-2">
                            <div className="flex items-start space-x-2">
                                <span className="text-sm text-[#5D6368] max-w-32 text-left">On-Site Data Collection</span>
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconCheck} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex flex-col items-center space-x-2">
                                <img src={iconMinusCircle} alt="" />
                                <span className="text-xs text-[#CECECE] max-w-32 text-left">Requires setup</span>
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                        <div className="border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>

                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-start text-color-[#5D6368] p-2">
                            <div className="flex items-start space-x-2">
                                <span className="text-sm text-[#5D6368] max-w-32 text-left">AI-Powered Transcription</span>
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconCheck} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                        <div className="border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>

                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-start text-color-[#5D6368] p-2">
                            <div className="flex items-start space-x-2">
                                <span className="text-sm text-[#5D6368] max-w-32 text-left">Regulatory Compliance for BC</span>
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconCheck} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconCheckGrey} alt="" />
                            </div>
                        </div>
                        <div className="border-b border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconCheckGrey} alt="" />
                            </div>
                        </div>

                        <div className="border-r border-dashed border-[#E5E5E5] flex items-center justify-start p-2">
                            <div className="flex items-start space-x-2">
                                <span className="text-sm text-[#5D6368] max-w-32 text-left">Designed for Assessment Firms</span>
                            </div>
                        </div>
                        <div className="border-r border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconCheck} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                        <div className="border-r border-dashed border-[#E5E5E5] flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-4">
                            <div className="flex items-center space-x-2">
                                <img src={iconTimesCircle} alt="" />
                            </div>
                        </div>
                </div>
            </div>

        </div>

    </Section>
  );
};

export default Compare;
