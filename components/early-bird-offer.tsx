"use client";

import { useState, useEffect } from "react";
import { PRICING } from "@/lib/pricing";
import { CTAButton } from "@/components/cta-button";
import { Badge } from "@/components/ui/badge";
import { Gift, Rocket, Globe, Timer, ArrowRight, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { motion, AnimatePresence } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import { PaymentModal } from "@/components/payment-modal";

export function EarlyBirdOffer() {
  const [pulsing, setPulsing] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // Animation de battement de coeur automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsing(true);
      setTimeout(() => setPulsing(false), 800);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Livret blanc EXCLUSIF",
      description: "Accédez à des connaissances exclusives du secteur",
      color: "bg-resotravo-blue",
      available: true
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "1 mois INCLUS",
      description: "Premier mois inclus dans l'abonnement",
      color: "bg-resotravo-orange",
      available: true
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Site web INCLUS",
      description: "Votre présence en ligne clé en main",
      color: "bg-resotravo-blue",
      available: true
    }
  ];
  
  // Avantages exclusifs seulement pour ceux qui paient
  const exclusiveAdvantages = true;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Timer Section */}
      <div className="text-center mb-12">
        <CountdownTimer />
      </div>
      
      {/* Main Offer Card avec animation de battement */}
      <motion.div 
        className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        animate={pulsing ? {
          scale: [1, 1.03, 1],
          boxShadow: [
            '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
            '0 25px 60px -10px rgba(232, 121, 43, 0.4)',
            '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          ]
        } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* En-tete special - Badge anime */}
        <div className="bg-resotravo-blue p-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
            animate={pulsing ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.8 }}
          >
            <Timer className="w-5 h-5 text-white animate-pulse" />
            <span className="font-koulen text-lg text-white">
              OFFRE LIMITÉE - TARIF PRÉFÉRENTIEL
            </span>
          </motion.div>
        </div>

        {/* Comparatif d'options */}
        <div id="offer-options" className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Option 1: Paiement immédiat */}
          <div className="relative overflow-hidden bg-gradient-to-br from-resotravo-blue to-resotravo-blue p-6 sm:p-8 border-r border-white/20">
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="font-koulen text-2xl text-white mb-2">PAIEMENT IMMÉDIAT</h3>
                <p className="text-white/80 mb-2">Versement immédiat, abonnement actif dès octobre</p>
                <p className="text-white/80 mb-6">Accès complet à tous les avantages exclusifs</p>
                
                <motion.div 
                  className="rounded-xl bg-green-400/20 p-4 mb-6 border border-green-400/30"
                  animate={pulsing ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-baseline gap-2 justify-center">
                    <span className="font-koulen text-4xl sm:text-5xl text-white">
                    149€
                    </span>
                    <div className="flex flex-col items-start">
                      <span className="text-white/80 font-medium text-lg">HT/mois</span>
                      <Badge className="bg-white/20 text-white border-0">-25%</Badge>
                    </div>
                  </div>
                  <p className="text-white/80 line-through mt-2">
                    Au lieu de {PRICING.regular.price.toFixed(0)}€ HT/mois
                  </p>
                  <p className="text-green-300 mt-2 text-sm">
                  Abonnement mensuel sur 12 mois
                  </p>
                </motion.div>
                
                <button 
                  onClick={() => {
                    const optionsSection = document.getElementById('offer-options');
                    if (optionsSection) {
                      optionsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-resotravo-blue hover:bg-white/90 text-base sm:text-lg font-bold py-3 px-6 rounded-xl shadow-xl w-full group flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Je réserve ma place
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              
              {/* Liste des avantages avec animation */}
              <div className="space-y-3 mt-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 bg-white/10 p-3 rounded-lg"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className={`min-w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-koulen text-lg text-white">{feature.title}</h4>
                      <p className="text-white/80 text-sm">{feature.description}</p>
                    </div>
                    <CheckCircle className="ml-auto text-green-400" />
                  </motion.div>
                ))}
                
                <div className="text-center mt-8">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 py-1.5 px-4">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    TOUT INCLUS
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Liste d'attente */}
          <div className="p-6 sm:p-8 bg-gray-800">
            <div className="text-center mb-6">
              <h3 className="font-koulen text-2xl text-white/90 mb-2">LISTE D&apos;ATTENTE</h3>
              <p className="text-white/70 mb-2">Profitez de votre abonnement dès septembre 2025</p>
              <p className="text-white/70 mb-6">Profitez de -25 % en réservant aujourd&apos;hui</p>
              
              <div className="rounded-xl bg-gray-700/30 p-4 mb-6 border border-gray-600/30">
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="font-koulen text-4xl sm:text-5xl text-white/80">
                    149€
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-white/80 font-medium text-lg">HT/mois</span>
                    <span className="bg-green-600/20 text-green-500 py-1 px-2 rounded-md font-medium">-25%</span>
                  </div>
                </div>
                <p className="text-white/70 line-through mt-2">
                  Au lieu de {PRICING.regular.price.toFixed(0)}€ HT/mois
                </p>
                <p className="text-green-300 mt-2 text-sm">
                Abonnement mensuel sur 12 mois
                </p>
              </div>
              
              <button
                onClick={() => setShowWaitlistForm(true)}
                className="border border-white/30 text-white/90 hover:bg-white/10 text-base sm:text-lg font-bold py-3 px-6 rounded-xl w-full group flex items-center justify-center gap-2 transition-all duration-300"
              >
                Rejoindre la liste d&apos;attente
              </button>
            </div>
            
            {/* Liste des avantages */}
            <div className="space-y-3 mt-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-gray-700/10 p-3 rounded-lg opacity-60"
                >
                  <div className="min-w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white/50">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-koulen text-lg text-white/70">{feature.title}</h4>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </div>
                  <XCircle className="ml-auto text-red-400/70" />
                </div>
              ))}
              
              <div className="text-center mt-8">
                <Badge className="bg-red-500/10 text-red-300/60 border-red-500/20 py-1.5 px-4">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  AVANTAGES NON INCLUS
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Banniere finale */}
        <div className="p-6 bg-resotravo-blue text-center">
          <motion.p 
            className="font-koulen text-lg text-white"
            animate={pulsing ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.8 }}
          >
            NE MANQUEZ PAS CETTE OPPORTUNITÉ ! OFFRE LIMITÉE AUX 50 PREMIERS INSCRITS
          </motion.p>
        </div>
      </motion.div>

      {/* Modaux */}
      <WaitlistForm isOpen={showWaitlistForm} setIsOpen={setShowWaitlistForm} />
      <PaymentModal isOpen={showPaymentModal} setIsOpen={setShowPaymentModal} />
    </div>
  );
}