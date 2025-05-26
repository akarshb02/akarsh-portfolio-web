
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
      description: "A user-friendly cryptocurrency exchange platform with advanced trading features, real-time market data, and secure wallet integration.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      tags: ["React.js", "TypeScript", "TailwindCSS", "Web3", "Trading"],
      demoLink: "https://koinbx.net/",
      codeLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "ZeroSwap DeFi Platform",
      description: "Decentralized exchange protocol with yield farming, staking rewards, and cross-chain compatibility for seamless DeFi operations.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      tags: ["React.js", "Web3", "DeFi", "Solidity", "TypeScript"],
      demoLink: "https://zeroswap.io/",
      codeLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Autonomint Web3 Solutions",
      description: "Advanced Web3 application with smart contract integration, wallet connections, and blockchain transaction management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React.js", "Web3", "Smart Contracts", "TailwindCSS"],
      demoLink: "https://autonomint.com/",
      codeLink: "#",
      featured: false,
    },
    {
      id: 4,
      title: "DeFi Wizard Analytics",
      description: "Comprehensive analytics platform for DeFi protocols with real-time data visualization and portfolio tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "Analytics", "Charts"],
      demoLink: "https://defiwizard.xyz/",
      codeLink: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A curated selection of my work showcasing expertise in modern web technologies, 
            blockchain development, and creating exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group bg-card/50 backdrop-blur-sm border border-muted/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary text-white">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="skill-pill hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button asChild variant="ghost" size="sm" className="hover:text-primary">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
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
