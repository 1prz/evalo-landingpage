
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F1F1F1] text-[#52575C]">
      <div className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-16">

          <div>

            <div className='pb-12'>
              <img src="assets/footerLogo.svg" alt="AI Icon" className="w-auto mx-auto" />
            </div>
            <p className="text-xl text-center mb-4">
              Digitize on-site inspections.<br />Automate reporting.<br />Work smarter.
            </p>

          </div>


        </div>

      </div>
      <div className="bg-[#DADADA] text-[#1C1D1F] p-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} Evalo. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="https://linktr.ee/evalo_app" target='blank_' className="text-[#1C1D1F] text-sm hover:text-white transition-colors">Contact</a>
          <a href="https://langara.ca/programs-and-courses/programs/web-and-mobile-app/program-curriculum.html" target='blank_' className="text-[#1C1D1F] text-sm hover:text-white transition-colors">Langara college</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
