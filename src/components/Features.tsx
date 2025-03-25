
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { Layers, Shield, Zap, Users, LineChart, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Layers,
    title: 'Intuitive Design',
    description: 'Thoughtfully crafted interface that feels natural and effortless to use.'
  },
  {
    icon: Shield,
    title: 'Secure Framework',
    description: 'Built with security in mind, protecting your data at every level.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures everything loads in milliseconds.'
  },
  {
    icon: Users,
    title: 'Collaborative Tools',
    description: 'Work seamlessly with your team through our integrated workflow.'
  },
  {
    icon: LineChart,
    title: 'Detailed Analytics',
    description: 'Gain insights with comprehensive data visualization tools.'
  },
  {
    icon: Lightbulb,
    title: 'Smart Automation',
    description: 'Save time with intelligent automation of repetitive tasks.'
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div 
      className="group relative p-6 border border-border rounded-xl hover:shadow-md transition-all duration-300 animate-fade-in bg-card/30 hover:bg-card"
      style={{ animationDelay: `${100 + (index * 100)}ms` }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <div className="inline-block mb-2">
          <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
            Features
          </span>
        </div>
        
        <AnimatedText
          text="Crafted with attention to every detail"
          element="h2"
          className="text-3xl md:text-4xl font-bold mb-6 mx-auto"
        />
        
        <AnimatedText
          text="Our comprehensive suite of tools and capabilities designed to elevate your experience."
          element="p"
          className="text-muted-foreground max-w-2xl mx-auto"
          delay={200}
        />
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;
