
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-sm font-mono mb-4 text-primary">Hi, my name is</h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 hero-gradient">Akarsh B</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I'm a frontend developer specializing in building exceptional digital experiences with React, Next.js, and Web3 technologies.
            Currently, I'm focused on building accessible, human-centered products.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work 
                <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </Button>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/akarsh-b-02/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Linkedin size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Github size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href="mailto:akarsh226@gmail.com" 
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Mail size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
