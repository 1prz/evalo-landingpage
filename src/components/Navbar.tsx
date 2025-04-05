
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import Button from './Button';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Why Us', href: '#usp' },
  { label: 'Team', href: '#team' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-12',
          isScrolled ? 'py-4 backdrop-blur shadow-sm' : 'py-6'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gradient">
            <img src="assets/footerLogo.svg" alt="AI Icon" className="w-auto mx-auto max-h-[32px]" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium link-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              size="sm"
              className="hidden md:flex rounded-[6px]"
              onClick={() => window.location.href = '#purchase'}
            >
              Contact us
            </Button>

            <button
              className="md:hidden p-2 text-foreground hover:bg-accent rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={[...navItems, { label: 'Purchase', href: '#purchase' }]}
      />
    </>
  );
};

export default Navbar;
