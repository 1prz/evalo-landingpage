
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-4">Minimal</h3>
            <p className="text-primary-foreground/70 mb-4">
              Elevating simplicity through perfect design. 
              Our mission is to create beautiful, functional solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Site Map</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#overview" className="text-primary-foreground/70 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#features" className="text-primary-foreground/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#usp" className="text-primary-foreground/70 hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#team" className="text-primary-foreground/70 hover:text-white transition-colors">Team</a></li>
              <li><a href="#purchase" className="text-primary-foreground/70 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@minimal.com" className="text-primary-foreground/70 hover:text-white transition-colors">
                  info@minimal.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-primary-foreground/70 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Minimal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/70 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/70 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/70 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
