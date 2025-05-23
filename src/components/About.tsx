
import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    "React.js", "Next.js", "React Native", "JavaScript", 
    "TypeScript", "TailwindCSS", "Gluestack", "Expo", "Web3"
  ];

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground">
              I'm a passionate frontend developer with a knack for creating polished, user-friendly web and mobile applications. 
              With expertise in modern JavaScript frameworks and libraries, I specialize in building responsive, 
              performant applications that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              My experience spans from startups to established companies, where I've contributed to projects 
              ranging from cryptocurrency exchanges to Web3 applications. I'm committed to writing clean, 
              maintainable code and staying current with the latest industry trends and best practices.
            </p>
            <p className="text-muted-foreground">
              Whether working with React, Next.js, or React Native, I pride myself on attention to detail 
              and delivering solutions that exceed expectations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills &amp; Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="skill-pill">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
