
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "KoinBX Exchange",
      description: "A user-friendly cryptocurrency exchange platform with advanced trading features and real-time market data.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      tags: ["React.js", "TypeScript", "TailwindCSS", "Web3"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive developer portfolio showcasing skills and projects with a clean, minimalist design.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TailwindCSS", "React"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "NFT Marketplace",
      description: "A Web3 platform for creating, buying, and selling digital assets with wallet integration and transaction history.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["React.js", "Web3", "Solidity", "TailwindCSS"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle max-w-2xl">
          A selection of my recent work that showcases my skills and expertise in frontend development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border border-muted overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="skill-pill">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button asChild variant="ghost" size="sm">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild variant="default" size="sm">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
