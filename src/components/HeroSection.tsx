"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedListDemo } from "./Hero/animatedList";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-accent/5 -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

        {/* Hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pl-15 pr-15 pt-15 items-center">
          {/* Left: Text + CTA */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
              <span className="bg-gradient-to-r text-8xl from-primary via-foreground to-accent bg-clip-text text-transparent">
                AutoMint
              </span>
              <br />
              <span className="text-xl md:text-3xl text-gray-200 font-semibold">
                Decentralized Smart Invoice Revolution
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Create, manage, and pay smart invoices with{" "}
              <span className="text-primary font-semibold">AutoBills</span> —
              supporting both crypto wallets and simulated UPI payments for
              seamless <br/>Web2-Web3 integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="px-8 py-6 text-md font-semibold transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Launch AutoMint
                <ArrowRight
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-md font-semibold border-2 hover:bg-accent/10"
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* Right: Animated List */}
          <div className="relative z-10">
            <AnimatedListDemo />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              $2M+
            </div>
            <div className="text-sm text-muted-foreground">
              Volume Processed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              50K+
            </div>
            <div className="text-sm text-muted-foreground">
              AutoBills™ Created
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">
              Supported Chains
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
