
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "KoinBX",
      type: "Full-time",
      duration: "Aug 2024 - Jan 2025 · 6 mos",
      description: "At KoinBX, a global cryptocurrency exchange platform, I played a key role in developing the user interface using React.js and Tailwind CSS.",
      location: "Remote",
      skills: ["React.js", "TailwindCSS", "Web3"]
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Magico",
      type: "Freelance",
      duration: "Dec 2023 - Oct 2024 · 11 mos",
      description: "Delivered responsive website solutions with modern UI/UX practices, improving client conversion rates and user engagement.",
      location: "Remote",
      skills: ["React.js", "Next.js", "TailwindCSS"]
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Autonomint",
      type: "Freelance",
      duration: "Apr 2024 - Aug 2024 · 5 mos",
      description: "Developed frontend components for a Web3 application, implementing wallet connections and blockchain interactions.",
      location: "Bengaluru, Karnataka, India · Remote",
      skills: ["React.js", "TypeScript", "Web3"]
    },
    {
      id: 4,
      role: "Frontend Web Developer",
      company: "ZeroSwap Labs",
      type: "Full-time",
      duration: "Oct 2020 - Oct 2023 · 3 yrs 1 mo",
      description: "Led frontend development for a decentralized exchange platform, implementing complex UI features and improving user experience.",
      location: "Remote",
      skills: ["React.js", "TypeScript", "Web3"]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-muted/10">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="bg-card border border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="skill-pill">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-sm text-muted-foreground">{exp.type}</span>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
