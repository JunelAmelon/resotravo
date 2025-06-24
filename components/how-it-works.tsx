"use client";

import { BookOpen, Users, Target } from "lucide-react";
import { CTAButton } from "./cta-button";

export function HowItWorks() {
  const steps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formation COMPLÈTE",
      description: "Accédez à notre programme de formation exclusif et devenez un expert du courtage en travaux.",
      color: "bg-resotravo-blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement",
      description: "Bénéficiez d'un suivi personnalisé et d'un accès à notre communauté d'experts.",
      color: "bg-resotravo-orange"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Premiers RÉSULTATS",
      description: "Commencez à générer vos premiers revenus grace à notre méthode éprouvée.",
      color: "bg-resotravo-blue"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center text-white mb-6`}>
              {step.icon}
            </div>
            
            <h3 className="font-koulen text-2xl text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-600 mb-6">{step.description}</p>
            
            {index === steps.length - 1 && (
              <CTAButton 
                href="#signup" 
                variant="primary"
                className="w-full justify-center"
                withIcon
              >
                Je commence maintenant
              </CTAButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}