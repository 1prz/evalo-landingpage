
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div 
      className={cn(
        'fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex justify-end p-6">
        <button 
          onClick={onClose}
          className="text-foreground p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              'text-3xl font-medium link-underline',
              isOpen ? 'animate-fade-in-fast' : 'animate-fade-out'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
