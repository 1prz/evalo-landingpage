
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { Github, Linkedin, Twitter } from 'lucide-react';
import LinkedinIcon from '@/icons/u_linkedin-alt.svg';
import { cn } from '@/lib/utils';


const teamMembers = [
  {
    name: 'Ziruo Zhang',
    role: 'PM, Designer',
    bio: 'Visionary leader with 15+ years of experience in design and product development.',
    image: 'assets/Team/Ziruo.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/ziruo-zhang',
      github: '#'
    }
  },
  {
    name: 'Rasul Omarov',
    role: 'Backend Developer',
    bio: 'Award-winning designer specializing in minimalist interfaces and user experience.',
    image: 'assets/Team/Rasul.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/rasulomaroff',
      github: '#'
    }
  },
  {
    name: 'Luis Perez',
    role: 'UX Designer ',
    bio: 'Technical genius with a passion for creating elegant solutions to complex problems.',
    image: 'assets/Team/Luis.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/is-luisperez',
      github: '#'
    }
  },
  {
    name: 'Carolina Ferreira',
    role: 'UX Designer',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'assets/Team/Carolina.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/carolinafgrocha',
      github: '#'
    }
  },
  {
    name: 'Hanbee Choi',
    role: 'UX Designer',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'assets/Team/Hanbee.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/hanbee-choi',
      github: '#'
    }
  },
  {
    name: 'Raul Diaz',
    role: 'UX Designer',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'assets/Team/Raul.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/rauldiazbe',
      github: '#'
    }
  },
  {
    name: 'Natsuko Ogata',
    role: 'Front-end Developer',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'assets/Team/Natsuko.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/natsuko-ogata',
      github: '#'
    }
  },
  {
    name: 'Xuehui Lan',
    role: 'Front-end Developer',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'assets/Team/Lan.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/xuehui-lan',
      github: '#'
    }
  },
  {
    name: 'Tomoki Kaneko',
    role: 'Fullstack Developer',
    bio: 'Dedicated to ensuring clients have an exceptional experience with our products.',
    image: 'assets/Team/Tomoki.png',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/tomoki-kaneko',
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
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-3/2">

        <a href={member.social.linkedin} aria-label={`${member.name}'s LinkedIn`} target='_blank' rel='noopener noreferrer'>

          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

        </a>

      </div>

      <div className='flex gap-1 justify-between items-center'>
        <div className='flex flex-col'>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-primary/70 mb-2">{member.role}</p>
        </div>
        <a
            href={member.social.linkedin}
            className="w-12 h-12 flex items-center justify-center p-3 rounded-full bg-white hover:bg-primary/10 transition-colors duration-300"
            aria-label={`${member.name}'s LinkedIn`}
            target='_blank'
            rel='noopener noreferrer'
          >

            <img src={LinkedinIcon} alt="LinkedIn" className="w-8 h-8" />

          </a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <div className="relative bg-white rounded-[16px] border-2 border-dashed border-[#F7F7F7] p-8
  before:content-[''] before:absolute before:inset-[-34px] before:border-2 before:border-dashed before:border-[#F7F7F7] before:rounded-[50px] before:-z-10
  after:content-[''] after:absolute after:inset-[-68px] after:border-2 after:border-dashed after:border-[#F7F7F7] after:rounded-[84px] after:-z-20">
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-2">
            <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
              Our Team
            </span>
          </div> */}

          <AnimatedText
            text="Meet the Experts Behind Evalo"
            element="h2"
            className="text-3xl md:text-3xl font-bold mb-2 max-w-72 mx-auto"
          />

          {/* <AnimatedText
            text="A passionate team of professionals dedicated to creating exceptional products."
            element="h3"
            className="text-muted-foreground text-lg mb-12"
            delay={200}
          /> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1000px] mx-auto

        ">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Team;
