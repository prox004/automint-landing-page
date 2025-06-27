"use client";

import {
  Wallet,
  Smartphone,
  RefreshCw,
  Bell,
  Shield,
  Zap,
  CreditCard,
  Globe,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const features = [
  {
    icon: Wallet,
    title: "Web3 Wallet Integration",
    description:
      "Connect via WalletConnect or MetaMask. Sign-in with wallet signature for seamless authentication.",
    badge: "Crypto Native",
    color: "text-blue-500",
  },
  {
    icon: Smartphone,
    title: "Simulated UPI Support",
    description:
      "Web2 users can pay via UPI simulation. Automatic conversion to crypto for invoice settlement.",
    badge: "Web2 Friendly",
    color: "text-green-500",
  },
  {
    icon: CreditCard,
    title: "AutoBills™ Creation",
    description:
      "Create smart invoices with custom amounts, tokens, chains, and recurring schedules.",
    badge: "Smart Invoices",
    color: "text-purple-500",
  },
  {
    icon: RefreshCw,
    title: "Recurring Payments",
    description:
      "Set up automatic recurring payments with mandate management and easy cancellation.",
    badge: "Automated",
    color: "text-orange-500",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description:
      "Get instant alerts for invoice creation, payments, expiration, and recurring charges.",
    badge: "Live Updates",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description:
      "All transactions on-chain with immutable records. Your funds, your control.",
    badge: "Blockchain Secured",
    color: "text-indigo-500",
  }
  
];

export function FeaturesSection() {
  return (
    <section id='features' className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 px-5">
            <span className="bg-gradient-to-br from-primary to-foreground bg-clip-text text-transparent">
              Powerful Features for Modern Payments
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-5">
            Everything you need to create, manage, and process smart invoices
            across Web2 and Web3 ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover:shadow-xl bg-popover rounded-xl p-5 transition-all duration-300 border-3 hover:border-primary/50 hover:-translate-y-1 "
            >
              <div className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon />
                    </div>
                  </div>
                  <Badge variant="secondary"  className="text-xs bg-gray-50 text-primary">
                    {feature.badge}
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-popover-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-ring mb-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

