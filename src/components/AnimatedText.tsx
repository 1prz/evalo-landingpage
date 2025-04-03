
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
  
  // Create a ref with explicit forwardRef compatible typing
  const elementRef = useRef<HTMLDivElement>(null);

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

  // Render the appropriate element using a switch statement rather than dynamic components
  // This avoids the TypeScript complexity
  const renderElement = () => {
    const content = (
      <>
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
      </>
    );

    switch (element) {
      case 'h1':
        return <h1 ref={elementRef} className={className}>{content}</h1>;
      case 'h2':
        return <h2 ref={elementRef} className={className}>{content}</h2>;
      case 'h3':
        return <h3 ref={elementRef} className={className}>{content}</h3>;
      case 'h4':
        return <h4 ref={elementRef} className={className}>{content}</h4>;
      case 'h5':
        return <h5 ref={elementRef} className={className}>{content}</h5>;
      case 'h6':
        return <h6 ref={elementRef} className={className}>{content}</h6>;
      case 'span':
        return <span ref={elementRef} className={className}>{content}</span>;
      default:
        return <p ref={elementRef} className={className}>{content}</p>;
    }
  };

  return renderElement();
};

export default AnimatedText;
