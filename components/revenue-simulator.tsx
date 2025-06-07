"use client";

import { useState, useEffect } from 'react';
import "@/app/efficiency-bar.css";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Clock, Target, TrendingUp, BarChart3, Award, Check } from "lucide-react";
import { motion } from "framer-motion";

// Valeur moyenne d'une commission par projet (base)
const baseCommission = 1200;

// Formule de calcul d'abonnement
const baseMonthlySubscription = 149.90; // Prix mensuel de base

export function RevenueSimulator() {
  const [implicationLevel, setImplicationLevel] = useState(10); // Niveau d'implication (ex-hoursPerWeek)
  const [projectsPerMonth, setProjectsPerMonth] = useState(2);
  const [animateValue, setAnimateValue] = useState(false);
  
  // Calcul de la commission ajustée selon le niveau d'implication
  // Plus le niveau d'implication est élevé, plus la commission augmente
  const adjustedCommission = baseCommission * (1 + (implicationLevel / 100));
  
  // Calcul des revenus estimés
  const estimatedMonthlyRevenue = projectsPerMonth * adjustedCommission;
  const estimatedYearlyRevenue = estimatedMonthlyRevenue * 12;
  
  // Calcul du prix d'abonnement mensuel en fonction du niveau d'implication et du nombre de projets
  // L'abonnement augmente légèrement avec l'implication et le nombre de projets
  const monthlySubscription = Math.round(baseMonthlySubscription * (1 + (implicationLevel / 200) + (projectsPerMonth / 10)));
  const yearlySubscription = monthlySubscription * 12;
  
  // Calcul du retour sur investissement (ROI)
  const monthlyROI = Math.round((estimatedMonthlyRevenue / monthlySubscription) * 100);
  
  // Trigger animation when values change
  useEffect(() => {
    setAnimateValue(true);
    const timer = setTimeout(() => setAnimateValue(false), 600);
    return () => clearTimeout(timer);
  }, [implicationLevel, projectsPerMonth]);
  
  // Calculate efficiency score based on implication level
  const efficiencyScore = Math.min(100, Math.round((implicationLevel / 40) * 100));
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Colonne des controles */}
          <div className="order-2 md:order-1 p-8 space-y-6">
            <h3 className="font-koulen text-2xl text-resotravo-blue mb-6">SIMULATEUR DE REVENUS</h3>
            
            {/* Disponibilite (heures) */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="implication" className="block font-medium text-gray-800">
                      TEMPS CONSACRÉ
                    </label>
                    <span className="text-sm text-gray-500">
                      Heures par semaine sur la plateforme
                    </span>
                  </div>
                </div>
                <div className="bg-white py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                  <motion.span 
                    className="font-koulen text-2xl text-resotravo-blue"
                    animate={animateValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {implicationLevel}/40
                  </motion.span>
                </div>
              </div>
              
              <Slider 
                id="implication"
                min={2} 
                max={40} 
                step={1} 
                value={[implicationLevel]} 
                onValueChange={(value) => setImplicationLevel(value[0])}
                className="w-full [&>span]:bg-resotravo-blue [&>span]:h-1.5 [&>span_span]:bg-resotravo-blue [&>span_span]:shadow-md [&>span_span]:h-5 [&>span_span]:w-5 [&>span_span]:top-[-6px]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">2</span>
                <span className="text-xs text-gray-400">40</span>
              </div>
            </div>
            
            {/* Objectif (projets) */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="projects" className="block font-medium text-gray-800">
                      Objectif
                    </label>
                    <span className="text-sm text-gray-500">
                      Projets par mois
                    </span>
                  </div>
                </div>
                <div className="bg-white py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                  <motion.span 
                    className="font-koulen text-2xl text-resotravo-blue"
                    animate={animateValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {projectsPerMonth}
                  </motion.span>
                </div>
              </div>
              
              <Slider 
                id="projects"
                min={1} 
                max={5} 
                step={1} 
                value={[projectsPerMonth]} 
                onValueChange={(value) => setProjectsPerMonth(value[0])}
                className="w-full [&>span]:bg-resotravo-blue [&>span]:h-1.5 [&>span_span]:bg-resotravo-blue [&>span_span]:shadow-md [&>span_span]:h-5 [&>span_span]:w-5 [&>span_span]:top-[-6px]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">1</span>
                <span className="text-xs text-gray-400">5</span>
              </div>
            </div>
            

          </div>
          
          {/* Colonne des résultats */}
          <div className="order-1 md:order-2 bg-resotravo-blue p-8 text-white">
            <div className="h-full flex flex-col">
              <h3 className="font-koulen text-2xl mb-8">VOS REVENUS POTENTIELS</h3>
              
              <div className="space-y-6 flex-1">
                {/* Revenu mensuel */}
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <p className="text-white/80 font-medium">REVENU MENSUEL</p>
                  </div>
                  
                  <motion.div 
                    className="text-center py-6 px-6 rounded-xl border border-green-200/30 bg-green-600/20 shadow-sm"
                    animate={animateValue ? { y: [0, -5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-koulen text-white">
                        {estimatedMonthlyRevenue} €
                      </span>
                      <span className="text-white/80 text-lg">/mois</span>
                    </div>
                    <div className="text-white/80 text-sm mt-1">
                      {estimatedYearlyRevenue} € /an
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center gap-2 mt-2 bg-white/15 p-2 rounded-lg">
                    <Check className="w-4 h-4 text-green-300" /> 
                    <span className="text-sm">
                      <span className="font-medium">{Math.round(estimatedMonthlyRevenue / projectsPerMonth)}€</span> par projet en moyenne
                    </span>
                  </div>
                </div>


                
                {/* Facteurs de succès */}
                <div className="mt-auto">
                  <h4 className="text-white/90 text-lg mb-2">Comment ça marche:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">Plus vous investissez de temps, plus vous pouvez gérer de projets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">Commission moyenne de {baseCommission}€ par projet réalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">Formation et accompagnement inclus pour développer votre activité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}