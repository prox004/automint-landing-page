'use client';

import { ArrowRight, FileText, CreditCard, CheckCircle, ArrowRightIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: FileText,
    title: 'Create AutoBill™',
    description: 'Set amount, token, chain, and payment schedule. Generate a smart invoice with QR code and shareable link.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CreditCard,
    title: 'Choose Payment Method',
    description: 'Recipients can pay via crypto wallet (Web3) or UPI simulation (Web2). Seamless experience for all users.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: CheckCircle,
    title: 'Automatic Settlement',
    description: 'Smart contracts handle payment processing, status updates, and receipt generation. Real-time notifications for all parties.',
    color: 'from-purple-500 to-purple-600'
  }
];

export function HowItWorks() {
  return (
    <section id='howitworks' className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-foreground">
            How{' '}
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              AutoMint
            </span>
            {' '}Works
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Three simple steps to revolutionize your payment process and bridge the gap between Web2 and Web3.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform -translate-y-1/2" />
            <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform -translate-y-1/2" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="ml-3 mr-3 h-full bg-popover border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-5 text-center ">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-8">
                    <ArrowRightIcon className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}