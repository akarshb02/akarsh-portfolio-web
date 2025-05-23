
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/10">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="text-muted-foreground mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll get back to you as soon as possible!
            </p>
            
            <div className="space-y-4">
              <Card className="bg-card border border-muted">
                <CardContent className="p-4 flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:akarsh226@gmail.com" className="font-medium hover:text-primary">
                      akarsh226@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-muted">
                <CardContent className="p-4 flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+919686003936" className="font-medium hover:text-primary">
                      +91 9686003936
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-muted">
                <CardContent className="p-4 flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/akarsh-b-02/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      /in/akarsh-b-02
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-muted">
                <CardContent className="p-4 flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      github.com/akarsh
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="bg-card border border-muted">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-background border-muted"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-background border-muted"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?" 
                      className="bg-background border-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..."
                      className="bg-background border-muted min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
