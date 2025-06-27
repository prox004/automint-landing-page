'use client';

import { useState } from 'react';
import { ArrowRight, Rocket, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id='cta' className="py-24">
      <div className="container mx-auto px-5">
        <Card className="relative overflow-hidden border-2 m-5 border-primary/20 bg-gradient-to-r from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 bg-accent" />
          <CardContent className="relative z-10 p-12 md:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                  Transform
                </span>
                <br />Your Payments?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Join the future of invoicing with AutoMint. Create your first AutoBill™ in minutes and experience the power of Web3 payments with Web2 simplicity.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Building
                  <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold border-2"
                >
                  <Github className="mr-2 w-5 h-5" />
                  View on GitHub
                </Button>
              </div>

              
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}