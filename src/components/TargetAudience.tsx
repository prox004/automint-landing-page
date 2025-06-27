'use client';

import { Building2, Users, Palette, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const audiences = [
  {
    icon: Building2,
    title: 'SaaS Companies',
    description: 'Automate subscription billing with crypto payments. Support both traditional and Web3 customers.',
    benefits: ['Recurring billing automation', 'Multi-currency support', 'Reduced payment friction'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Freelancers',
    description: 'Get paid faster with smart invoices. Accept payments in crypto or fiat with automatic conversion.',
    benefits: ['Instant payment notifications', 'Global payment acceptance', 'Professional invoice branding'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Content Creators',
    description: 'Monetize your content with subscription models. Seamless payment experience for your audience.',
    benefits: ['Fan subscription management', 'Tip jar functionality', 'Revenue analytics'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Briefcase,
    title: 'Small Businesses',
    description: 'Modern payment solutions for modern businesses. Bridge the gap between traditional and crypto payments.',
    benefits: ['Easy setup and integration', 'Customer payment flexibility', 'Transparent fee structure'],
    color: 'from-orange-500 to-red-500'
  }
];

export function TargetAudience() {
  return (
    <section id='targetaudience' className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            Built for{' '}
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a startup or an established business, AutoMint adapts to your payment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="group ml-3 mr-3 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${audience.color} mr-4`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {audience.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {audience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}