
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import Button from './Button';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: 'Essential',
    price: 49,
    description: 'Perfect for small teams and startups.',
    features: [
      'Core functionality',
      '5 user accounts',
      'Basic analytics',
      'Email support',
      '1GB storage'
    ],
    recommended: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Designed for growing businesses.',
    features: [
      'All Essential features',
      'Unlimited user accounts',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'API access',
      'Custom integrations'
    ],
    recommended: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 249,
    description: 'For large organizations with complex needs.',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom development',
      'SLA guarantees',
      'Unlimited storage',
      'Advanced security',
      'On-premise option'
    ],
    recommended: false,
    cta: 'Contact Sales'
  }
];

const PricingCard = ({ plan, index }: { 
  plan: typeof pricingPlans[0];
  index: number;
}) => {
  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 animate-fade-in",
        plan.recommended 
          ? "border-2 border-primary shadow-lg" 
          : "border border-border hover:shadow-md",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {plan.recommended && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
          Recommended
        </div>
      )}
      
      <div className={cn(
        "p-6",
        plan.recommended ? "pt-10" : ""
      )}>
        <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={plan.recommended ? "primary" : "outline"} 
          className="w-full"
        >
          {plan.cta} <ChevronRight size={16} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

const Purchase = () => {
  return (
    <Section id="purchase" className="bg-accent/50">
      <div className="text-center mb-16">
        <div className="inline-block mb-2">
          <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
            Pricing
          </span>
        </div>
        
        <AnimatedText
          text="Choose the perfect plan for you"
          element="h2"
          className="text-3xl md:text-4xl font-bold mb-6"
        />
        
        <AnimatedText
          text="Flexible pricing options designed to accommodate businesses of all sizes."
          element="p"
          className="text-muted-foreground max-w-2xl mx-auto"
          delay={200}
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} index={index} />
        ))}
      </div>
      
      <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We understand that some businesses have unique requirements. 
          Our team is ready to work with you to create a tailored solution that meets your specific needs.
        </p>
        <Button>
          Contact our team
        </Button>
      </div>
    </Section>
  );
};

export default Purchase;
