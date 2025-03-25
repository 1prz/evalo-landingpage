
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Section = ({
  id,
  className,
  children,
  fullHeight = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-6 py-16 md:py-24 md:px-12 lg:px-24',
        fullHeight && 'min-h-screen flex flex-col justify-center',
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
