
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingCube from './FloatingCube';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="text-sm font-mono mb-4 text-primary animate-fade-in">Hi, my name is</h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 hero-gradient animate-fade-in">Akarsh B</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in">
              I build things for the web.
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              I'm a frontend developer specializing in building exceptional digital experiences with React, Next.js, and Web3 technologies.
              Currently, I'm focused on building accessible, human-centered products.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
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
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:akarsh226@gmail.com" 
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <FloatingCube />
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
    </section>
  );
};

export default Hero;
