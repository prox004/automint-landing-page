'use client';

import { Github, Twitter, Linkedin, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API Docs', href: '#docs' }
  ],
  company: [
    { name: '', href: '#about' },
    { name: '', href: '#blog' },
    { name: '', href: '#careers' },
    { name: '', href: '#contact' }
  ],
  resources: [
    { name: 'GitHub', href: '#github' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Community', href: '#community' },
    { name: 'Support', href: '#support' }
  ],
  legal: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Security', href: '#security' },
    { name: 'Compliance', href: '#compliance' }
  ]
};

const socialLinks = [
  { icon: Github, href: '#github', label: 'GitHub' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Mail, href: '#email', label: 'Email' }
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t px-6">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2 pl-10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AutoMint</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Bridging Web2 and Web3 payments with smart invoices and seamless user experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Links sections */}

          <div>
            <h3 className="font-semibold mb-4"></h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 AutoMint. All rights reserved. Built for the future of payments.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with ❤️ for Web3</span>
            <span>•</span>
            <span>Open Source</span>
            <span>•</span>
            <span>Community Driven</span>
          </div>
        </div>
      </div>
    </footer>
  );
}