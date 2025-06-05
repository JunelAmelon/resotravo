"use client";

import { PRICING } from "@/lib/pricing";
import { CTAButton } from "@/components/cta-button";
import { Badge } from "@/components/ui/badge";
import { Gift, Rocket, Globe, Timer, ArrowRight } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";

export function EarlyBirdOffer() {
  const features = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Livret blanc exclusif",
      description: "Accédez à des connaissances exclusives du secteur",
      color: "bg-resotravo-blue"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "1 mois offert",
      description: "Démarrez sans frais supplémentaires",
      color: "bg-resotravo-orange"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Site web offert",
      description: "Votre présence en ligne clé en main",
      color: "bg-resotravo-blue"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timer Section */}
      <div className="text-center mb-12">
        <CountdownTimer />
      </div>
      
      {/* Main Offer Card */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
        {/* Price Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-resotravo-blue to-resotravo-blue p-6 sm:p-8 md:p-12 text-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6">
              <Timer className="w-5 h-5 text-white" />
              <span className="font-koulen text-base text-white">
                Offre limitée aux 50 premiers inscrits
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="font-koulen text-5xl sm:text-6xl md:text-7xl text-white">
                    {PRICING.early.price.toLocaleString('fr-FR')}€
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-white/80">HT</span>
                    <Badge className="bg-white/20 text-white border-0">-25%</Badge>
                  </div>
                </div>
                <p className="text-white/80 line-through mt-2">
                  Au lieu de {PRICING.regular.price.toLocaleString('fr-FR')}€ HT
                </p>
              </div>
              
              <CTAButton 
                href="#signup" 
                variant="primary" 
                className="bg-white text-resotravo-blue hover:bg-white/90 text-base sm:text-lg md:text-xl font-bold py-4 sm:py-6 px-6 sm:px-12 rounded-xl sm:rounded-2xl shadow-xl group"
              >
                <span className="flex items-center gap-2">
                  Je réserve ma place
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </CTAButton>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-b from-white to-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-resotravo-orange/20"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h4 className="font-koulen text-2xl mb-3 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}