"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Clock, Target, TrendingUp, BarChart3, Award, Check } from "lucide-react";
import { motion } from "framer-motion";

// Valeur moyenne d'une commission par projet
const avgCommission = 1200;

export function RevenueSimulator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [projectsPerMonth, setProjectsPerMonth] = useState(2);
  const [animateValue, setAnimateValue] = useState(false);
  
  // Calcul des revenus estimés
  const estimatedMonthlyRevenue = projectsPerMonth * avgCommission;
  const estimatedYearlyRevenue = estimatedMonthlyRevenue * 12;
  
  // Calcul du taux horaire (revenus mensuels divisés par nombre d'heures)
  const hourlyRate = Math.round(estimatedMonthlyRevenue / (hoursPerWeek * 4)); // Considérant 4 semaines par mois
  
  // Trigger animation when values change
  useEffect(() => {
    setAnimateValue(true);
    const timer = setTimeout(() => setAnimateValue(false), 600);
    return () => clearTimeout(timer);
  }, [hoursPerWeek, projectsPerMonth]);
  
  // Calculate efficiency score based on hours (more hours = higher score)
  const efficiencyScore = Math.min(100, Math.round((hoursPerWeek / 40) * 100));
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Colonne des contrôles */}
          <div className="order-2 md:order-1 p-8 space-y-6">
            <h3 className="font-koulen text-2xl text-resotravo-blue mb-6">Simulateur de revenus</h3>
            
            {/* Disponibilité (heures) */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="hours" className="block font-medium text-gray-800">
                      Disponibilité
                    </label>
                    <span className="text-sm text-gray-500">
                      Heures par semaine
                    </span>
                  </div>
                </div>
                <div className="bg-white py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                  <motion.span 
                    className="font-koulen text-2xl text-resotravo-blue"
                    animate={animateValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {hoursPerWeek}h
                  </motion.span>
                </div>
              </div>
              
              <Slider 
                id="hours"
                min={2} 
                max={40} 
                step={1} 
                value={[hoursPerWeek]} 
                onValueChange={(value) => setHoursPerWeek(value[0])}
                className="w-full [&>span]:bg-resotravo-blue [&>span]:h-1.5 [&>span_span]:bg-resotravo-blue [&>span_span]:shadow-md [&>span_span]:h-5 [&>span_span]:w-5 [&>span_span]:top-[-6px]"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">2h</span>
                <span className="text-xs text-gray-400">40h</span>
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
            
            {/* Score d'efficacité */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-800">Score d'efficacité</h4>
                </div>
                <div className="bg-white py-1.5 px-4 rounded-lg border border-gray-200 shadow-sm">
                  <span className="font-koulen text-lg text-resotravo-blue">{efficiencyScore}%</span>
                </div>
              </div>

              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full rounded-full bg-resotravo-blue" style={{width: `${efficiencyScore}%`}}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Moins d'heures</span>
                <span className="text-xs text-gray-400">Plus d'heures</span>
              </div>
            </div>
          </div>
          
          {/* Colonne des résultats */}
          <div className="order-1 md:order-2 bg-resotravo-blue p-8 text-white">
            <div className="h-full flex flex-col">
              <h3 className="font-koulen text-2xl mb-8">Vos revenus potentiels</h3>
              
              <div className="space-y-6 flex-1">
                {/* Revenu mensuel */}
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <p className="text-white/80 font-medium">Revenu mensuel</p>
                  </div>
                  
                  <motion.div
                    animate={animateValue ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="font-koulen text-4xl sm:text-5xl text-white mt-2 mb-3">
                      {estimatedMonthlyRevenue.toLocaleString("fr-FR").replace(/\s/g, "")}€
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center gap-2 mt-2 bg-white/15 p-2 rounded-lg">
                    <Check className="w-4 h-4 text-green-300" /> 
                    <span className="text-sm">
                      <span className="font-medium">{hourlyRate}€</span> par heure investie
                    </span>
                  </div>
                </div>
                
                {/* Revenu annuel */}
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <p className="text-white/80 font-medium">Projection annuelle</p>
                  </div>
                  
                  <div className="font-koulen text-3xl text-white">
                    {estimatedYearlyRevenue.toLocaleString("fr-FR").replace(/\s/g, "")}€
                  </div>
                </div>
              </div>
              
              {/* Note sur la commission */}
              <div className="mt-6">
                <div className="bg-white/15 rounded-lg p-4 text-center">
                  <p className="text-sm">
                    Basé sur une commission moyenne de {avgCommission.toLocaleString("fr-FR")}€ par projet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}