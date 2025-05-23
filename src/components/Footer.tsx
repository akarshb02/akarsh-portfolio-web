
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Akarsh B. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>Designed & Built with React, Next.js & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
