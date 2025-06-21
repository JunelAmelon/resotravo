"use client";

import { NotificationPopup } from "@/components/notification-popup";
import { SectionContainer } from "@/components/section-container";
import { Header } from "@/components/header";
import { CTAButton } from "@/components/cta-button";
import { CountdownTimer } from "@/components/countdown-timer";
import { EarlyBirdOffer } from "@/components/early-bird-offer";
import { RevenueSimulator } from "@/components/revenue-simulator";
import { HowItWorks } from "@/components/how-it-works";
import { WhyItWorks } from "@/components/why-it-works";
import { FAQAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { ArrowRight, GraduationCap, Laptop, Shield, CheckCircle, ChevronRight, CreditCard } from "lucide-react";
import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";
import { PaymentModal } from "@/components/payment-modal";
import { useState } from "react";

export default function Home() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <NotificationPopup />
      <Header />
      
      {/* SECTION 1 - HERO */}
      <SectionContainer 
        id="hero" 
        background="white"
        className="min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden relative pt-20 pb-12 md:py-0 bg-white"
      >
        {/* Fond uniforme */}
        <div className="absolute inset-0 bg-white z-0"></div>

        <div className="w-full max-w-[2000px] z-10 relative">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-center px-4 lg:px-10 xl:px-20">
            {/* Left Column - Text Content - Takes 3/5 of space on large screens */}
            <div className="text-left space-y-8 lg:col-span-3 z-10">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-resotravo-orange/10 text-resotravo-orange font-medium text-sm mb-6 animate-pulse">
                  <span className="w-2 h-2 bg-resotravo-orange rounded-full mr-2"></span>
                  Offre limitée aux 50 premiers inscrits
                </span>
                
                <h1 className="font-koulen text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1] tracking-tight mb-6 sm:mb-8">
                  <span className="text-resotravo-blue">Devenez</span><br/>
                  <span className="text-resotravo-orange">courtier en</span><br/>
                  <span className="text-resotravo-blue">travaux!</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
                  Générez facilement un revenu complémentaire <span className="font-bold">sans diplôme ni expérience</span> avec <span className="text-resotravo-blue font-bold">RESO</span><span className="text-resotravo-orange font-bold">TRAVO</span>. <br></br>
                  <span className="text-resotravo-blue font-semibold"> Rejoignez le premier réseau de courtage en travaux 100% digital et humain!</span>
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 mb-8">
                  {['Formation complète', 'Support personnalisé', 'Outils exclusifs'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="text-resotravo-blue w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                <div className="bg-white/70 backdrop-blur-sm py-3 px-5 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <p className="text-gray-500 text-sm font-medium mb-1">TARIF EXCEPTIONNEL</p>
                  <div className="flex items-baseline gap-3">
                    <div className="flex flex-col items-start">
                      <span className="text-5xl sm:text-6xl font-koulen text-resotravo-orange">149€</span>
                      <span className="text-sm text-gray-700 font-medium -mt-1">HT/mois</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-lg text-gray-500 line-through">199.90€</span>
                      <span className="text-xs text-gray-500 -mt-1">HT/mois</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setShowPaymentModal(true)}
                    className="text-lg font-bold py-4 px-8 shadow-2xl relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-resotravo-orange/30 hover:shadow-xl bg-resotravo-blue text-white rounded-full inline-flex items-center gap-2"
                  >
                    Je paie maintenant
                    <CreditCard className="w-5 h-5" />
                  </button>
                  
                  <button 
                    onClick={() => setShowWaitlistForm(true)}
                    className="text-lg font-bold py-4 px-8 shadow-2xl relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-resotravo-orange/30 hover:shadow-xl bg-white border border-resotravo-blue text-resotravo-blue rounded-full inline-flex items-center gap-2"
                  >
                    Liste d&apos;attente
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
{/* Right Column - Image - Optimized for maximum size without breaking layout */}
<div className="relative lg:col-span-2 z-0 order-first lg:order-last mb-5 lg:mb-0">
  <div className="relative w-full aspect-[3/4] max-w-full mx-auto lg:max-h-[90vh]">
    {/* Decorative elements */}
    <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-resotravo-blue/10 animate-pulse z-0"></div>
    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-resotravo-orange/10 animate-pulse z-0"></div>
    
    {/* Main image container - now using max-h for control */}
    <div className="relative w-full h-full max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700 group">
      {/* Image with optimized sizing */}
      <Image
        src="/herosectionimg.png"
        alt="Courtier en travaux RESOTRAVO"
        className="object-cover w-full h-full"
        fill
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1024px) 80vw, 
               50vw"
        priority
        style={{ 
          objectPosition: "center",
        }}
      />
      
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-resotravo-blue/10 via-transparent to-resotravo-orange/20 z-10"></div>
      <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-20"></div>
    </div>
    
    {/* Badge overlay */}
    <div 
      onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
      className="absolute -bottom-4 -right-4 bg-resotravo-orange text-white font-koulen text-xl md:text-2xl py-3 px-6 rounded-full shadow-xl transform rotate-3 z-10 hover:scale-110 transition-all duration-300 cursor-pointer"
    >
      DÉBUTEZ MAINTENANT
    </div>
  </div>
</div>
          </div>
        </div>
      </SectionContainer>
      
      {/* SECTION 2 - WHY */}
      <SectionContainer id="why" background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block text-resotravo-blue">Un moyen simple</span>
            <span className="block text-resotravo-orange">et moderne de RÉUSSIR</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez <span className="font-bold text-resotravo-blue">RESOTRAVO</span>, le premier réseau de courtage en travaux nouvelle génération, 
            <span className="font-bold"> 100% digital, 100% humain.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-resotravo-blue rounded-xl flex items-center justify-center mb-6 text-white transform -rotate-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="font-koulen text-2xl mb-4 text-resotravo-blue">On Vous Forme</h3>
            <p className="text-gray-600">
              Accédez à une <span className="font-semibold">formation complète</span> et des ressources professionnelles pour réussir.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-resotravo-orange rounded-xl flex items-center justify-center mb-6 text-white transform -rotate-6">
              <Laptop className="w-8 h-8" />
            </div>
            <h3 className="font-koulen text-2xl mb-4 text-resotravo-orange">On Vous ÉQUIPE</h3>
            <p className="text-gray-600">
              Tous les <span className="font-semibold">outils nécessaires</span> pour réussir dans le courtage en travaux.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-resotravo-blue rounded-xl flex items-center justify-center mb-6 text-white transform -rotate-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-koulen text-2xl mb-4 text-resotravo-blue">
              On Vous Guide
            </h3>
            <p className="text-gray-600">
              Un <span className="font-semibold">accompagnement personnalisé</span> à chaque étape de votre parcours.
            </p>
          </div>
        </div>
      </SectionContainer>
      
      {/* SECTION 3 - OFFRE LIMITEE */}
      <SectionContainer id="offer" background="dark" className="offer-section">
        <div className="relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Lancez-vous </span>
              <span className="text-resotravo-orange">avant les autres</span>
            </h2>
          </div>
          <EarlyBirdOffer />
      
      {/* Modaux pour les appels à l'action de la page d'accueil */}
      <WaitlistForm isOpen={showWaitlistForm} setIsOpen={setShowWaitlistForm} />
      <PaymentModal isOpen={showPaymentModal} setIsOpen={setShowPaymentModal} />
        </div>
      </SectionContainer>
      
      {/* SECTION 4 - SIMULATEUR */}
      <SectionContainer id="simulator" background="white">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-resotravo-blue">SIMULEZ vos </span>
            <span className="text-resotravo-orange">futurs REVENUS</span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez votre potentiel de gains selon votre disponibilité
          </p>
        </div>
        <RevenueSimulator />
      </SectionContainer>
      
      {/* SECTION 5 - COMMENT CA MARCHE */}
      <SectionContainer id="how" background="dark" className="how-section">
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="block text-white">Comment</span>
              <span className="block text-resotravo-orange">Ça marche ?</span>
            </h2>
          </div>
          <HowItWorks />
        </div>
      </SectionContainer>
      
      {/* SECTION 6 - POURQUOI CA FONCTIONNE */}
      <SectionContainer id="why-works" background="white">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-resotravo-blue">Un MODÈLE </span>
            <span className="text-resotravo-orange">qui fait ses preuves</span>
          </h2>
        </div>
        <WhyItWorks />
      </SectionContainer>
      
      {/* SECTION 7 - APPEL FINAL */}
      <SectionContainer id="signup" background="dark" className="signup-section">
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Ils sont DÉJÀ </span>
              <span className="text-resotravo-orange">en formation</span>
            </h2>
            
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-300">
              Rejoignez la nouvelle génération de courtiers en travaux.
              <br />
              <span className="font-semibold text-white">
                C&apos;est le moment de changer de vie.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <CTAButton 
                onClick={() => setShowPaymentModal(true)}
                variant="primary"
                className="text-lg font-bold"
                withIcon
              >
                Je passe à l&apos;action maintenant
              </CTAButton>
              
              <CTAButton 
                onClick={() => setShowWaitlistForm(true)}
                variant="outline"
                className="text-lg font-bold"
              >
                Je préfère la liste d&apos;attente
              </CTAButton>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* SECTION 8 - FAQ */}
      <SectionContainer id="faq" background="white">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-resotravo-blue">Questions </span>
            <span className="text-resotravo-orange">FRÉQUENTES</span>
          </h2>
        </div>
        <FAQAccordion />
      </SectionContainer>
      
      <Footer />
    </>
  );
}