
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in design and product development.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&q=80&fit=crop',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Natalie Chen',
    role: 'Lead Designer',
    bio: 'Award-winning designer specializing in minimalist interfaces and user experience.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&q=80&fit=crop',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Marcus Kim',
    role: 'CTO',
    bio: 'Technical genius with a passion for creating elegant solutions to complex problems.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&q=80&fit=crop',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sophia Rivera',
    role: 'Customer Success',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&q=80&fit=crop',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const TeamMemberCard = ({ member, index }: { 
  member: typeof teamMembers[0];
  index: number;
}) => {
  return (
    <div 
      className="group animate-fade-in"
      style={{ animationDelay: `${100 + (index * 100)}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex space-x-3">
            <a 
              href={member.social.twitter} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label={`${member.name}'s Twitter`}
            >
              <Twitter size={16} className="text-white" />
            </a>
            <a 
              href={member.social.linkedin} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin size={16} className="text-white" />
            </a>
            <a 
              href={member.social.github} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github size={16} className="text-white" />
            </a>
          </div>
        </div>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-primary/70 mb-2">{member.role}</p>
      <p className="text-muted-foreground text-sm">{member.bio}</p>
    </div>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <div className="text-center mb-16">
        <div className="inline-block mb-2">
          <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
            Our Team
          </span>
        </div>
        
        <AnimatedText
          text="Meet the people behind the vision"
          element="h2"
          className="text-3xl md:text-4xl font-bold mb-6"
        />
        
        <AnimatedText
          text="A passionate team of professionals dedicated to creating exceptional products."
          element="p"
          className="text-muted-foreground max-w-2xl mx-auto"
          delay={200}
        />
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Team;
