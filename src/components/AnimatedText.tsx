
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
  initiallyVisible?: boolean;
  staggerTime?: number;
}

const AnimatedText = ({
  text,
  element = 'p',
  className = '',
  delay = 0,
  initiallyVisible = false,
  staggerTime = 30,
}: AnimatedTextProps) => {
  const [visible, setVisible] = useState(initiallyVisible);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(true);
            }, delay);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  // Use a dynamic component based on the element prop
  const Component = element as keyof JSX.IntrinsicElements;

  return (
    <Component 
      ref={elementRef} 
      className={className}
    >
      {text.split(' ').map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block">
          {word.split('').map((char, charIdx) => (
            <span
              key={`${wordIdx}-${charIdx}`}
              className={cn(
                'inline-block transition-opacity duration-300',
                visible ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                transitionDelay: `${delay + (wordIdx * 2 + charIdx) * staggerTime}ms`,
              }}
            >
              {char}
            </span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </Component>
  );
};

export default AnimatedText;
