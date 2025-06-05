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
import { ArrowRight, GraduationCap, Laptop, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NotificationPopup />
      <Header />
      
      {/* SECTION 1 - HERO */}
      <SectionContainer 
        id="hero" 
        background="white"
        className="min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-20 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left space-y-8">

              
              <div>
                <h1 className="font-koulen text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-4 sm:mb-6">
                  <span className="text-resotravo-blue">Devenez courtier </span>
                  <span className="text-resotravo-orange">en travaux !</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-6 sm:mb-8 leading-relaxed sm:text-justify">Générez facilement un revenu complémentaire sans diplôme ni expérience avec RESOTRAVO. Soyez parmi les 50 premiers inscrits et profitez d&apos;une offre exclusive pour rejoindre le premier réseau de courtage en travaux 100 % digital et humain !<br/><br/>Inscrivez-vous vite, votre opportunité démarre ici !</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Tarif Exceptionnel</p>
                  <div className="flex items-baseline gap-2">
                    <div className="flex flex-col items-start">
                      <span className="text-5xl sm:text-6xl font-koulen text-resotravo-orange">149.90€</span>
                      <span className="text-xs text-gray-500 font-medium -mt-1">HT</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-lg text-gray-500 line-through">199.90€</span>
                      <span className="text-xs text-gray-500 -mt-1">HT</span>
                    </div>
                  </div>
                </div>
                
                <CTAButton 
                  href="#signup" 
                  variant="primary"
                  className="text-lg font-bold group relative overflow-hidden transition-all duration-300 transform hover:scale-105"
                  withIcon
                >
                  Je me lance
                </CTAButton>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative aspect-[4/5] w-full max-w-[700px] h-[420px] md:h-[700px] mx-auto">
              {/* Image covering the whole dotted border area */}
              <Image
                src="/herosectionimg.png"
                alt="Personne travaillant sur un projet"
                className="object-cover absolute inset-0 w-full h-full rounded-[3rem]"
                fill
                sizes="(max-width: 778px) 120vw, 50vw"
                priority
                style={{ zIndex: 0 }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-transparent to-black/20 pointer-events-none" style={{ zIndex: 1 }}></div>
              {/* Dotted border overlay */}
              <div className="absolute inset-0 rounded-[3rem] border-2 border-dashed border-resotravo-orange/30 pointer-events-none" style={{ zIndex: 2 }}></div>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* SECTION 2 - WHY */}
      <SectionContainer id="why" background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block text-resotravo-blue">Un moyen simple</span>
            <span className="block text-resotravo-orange">et moderne de reussir</span>
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
            <h3 className="font-koulen text-2xl mb-4 text-resotravo-orange">On Vous Equipe</h3>
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
        </div>
      </SectionContainer>
      
      {/* SECTION 4 - SIMULATEUR */}
      <SectionContainer id="simulator" background="white">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-resotravo-blue">Simuler vos </span>
            <span className="text-resotravo-orange">futurs revenus</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Découvrez votre potentiel de gains selon votre disponibilité
          </p>
        </div>
        <RevenueSimulator />
      </SectionContainer>
      
      {/* SECTION 5 - COMMENT ÇA MARCHE */}
      <SectionContainer id="how" background="dark" className="how-section">
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Comment </span>
              <span className="text-resotravo-orange font-bold">Ça marche ?</span>
            </h2>
          </div>
          <HowItWorks />
        </div>
      </SectionContainer>
      
      {/* SECTION 6 - POURQUOI ÇA FONCTIONNE */}
      <SectionContainer id="why-works" background="white">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-koulen text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-resotravo-blue">Un modele </span>
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
              <span className="text-white">Ils sont deja </span>
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
                href="#" 
                variant="primary"
                className="text-lg font-bold"
                withIcon
              >
                Je passe à l&apos;action maintenant
              </CTAButton>
              
              <CTAButton 
                href="#" 
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
            <span className="text-resotravo-orange">frequentes</span>
          </h2>
        </div>
        <FAQAccordion />
      </SectionContainer>
      
      <Footer />
    </>
  );
}