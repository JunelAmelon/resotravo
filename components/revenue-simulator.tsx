"use client";

import { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Clock, Target, BarChart3, Check } from "lucide-react";
import { motion } from "framer-motion";

const baseCommission = 1200;

export function RevenueSimulator() {
  const [implicationLevel, setImplicationLevel] = useState(10);
  const [projectsPerMonth, setProjectsPerMonth] = useState(2);
  const [animateValue, setAnimateValue] = useState(false);

  // Corrélation automatique entre heures et projets
  useEffect(() => {
    const newProjects = Math.max(1, Math.min(5, Math.round(implicationLevel / 5)));
    setProjectsPerMonth(newProjects);
  }, [implicationLevel]);

  useEffect(() => {
    const newHours = Math.max(5, Math.min(40, projectsPerMonth * 5));
    setImplicationLevel(newHours);
  }, [projectsPerMonth]);

  const estimatedMonthlyRevenue = projectsPerMonth * baseCommission;
  const estimatedYearlyRevenue = estimatedMonthlyRevenue * 12;

  useEffect(() => {
    setAnimateValue(true);
    const timer = setTimeout(() => setAnimateValue(false), 600);
    return () => clearTimeout(timer);
  }, [implicationLevel, projectsPerMonth]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Version Mobile - Résultats en premier */}
        <div className="md:hidden flex flex-col">
          {/* Carte des résultats (mobile) */}
          <div className="bg-resotravo-blue p-6 text-white">
            <h3 className="font-koulen text-2xl mb-4">VOS REVENUS POTENTIELS</h3>
            
            <div className="bg-white/10 rounded-xl p-4 border border-white/20 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5" />
                <p className="text-white/80 font-medium">REVENU MENSUEL</p>
              </div>
              
              <motion.div 
                className="text-center py-4 px-4 rounded-xl border border-green-200/30 bg-green-600/20 mb-2"
                animate={animateValue ? { y: [0, -3, 0] } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-koulen text-white">
                    {estimatedMonthlyRevenue.toLocaleString()} €
                  </span>
                  <span className="text-white/80 text-sm">/mois</span>
                </div>
                <div className="text-white/80 text-xs mt-1">
                  {estimatedYearlyRevenue.toLocaleString()} € /an
                </div>
              </motion.div>

              <div className="space-y-2 mt-3">
                <div className="flex items-center gap-2 bg-white/15 p-2 rounded-lg">
                  <Check className="w-4 h-4 text-green-300" /> 
                  <span className="text-sm">
                    <span className="font-medium">{baseCommission}€</span> par projet
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 p-2 rounded-lg">
                  <Check className="w-4 h-4 text-green-300" /> 
                  <span className="text-sm">
                    <span className="font-medium">{Math.round(implicationLevel / projectsPerMonth)}h</span> par projet/semaine
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contrôles (mobile) */}
          <div className="p-6 space-y-6">
            <h3 className="font-koulen text-xl text-resotravo-blue">PARAMÈTRES</h3>
            
            {/* Temps consacré */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-800 text-sm">TEMPS CONSACRÉ</label>
                    <span className="text-xs text-gray-500">Heures/semaine</span>
                  </div>
                </div>
                <div className="bg-white py-1 px-3 rounded-lg border border-gray-200 shadow-sm">
                  <motion.span 
                    className="font-koulen text-xl text-resotravo-blue"
                    animate={animateValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {implicationLevel}h
                  </motion.span>
                </div>
              </div>
              
              <Slider 
                min={5} 
                max={40} 
                step={1} 
                value={[implicationLevel]} 
                onValueChange={(value) => setImplicationLevel(value[0])}
                className="w-full [&>span]:bg-resotravo-blue"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>5h</span>
                <span>40h</span>
              </div>
            </div>
            
            {/* Nombre de projets */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-800 text-sm">PROJETS MENSUELS</label>
                    <span className="text-xs text-gray-500">Nombre de projets</span>
                  </div>
                </div>
                <div className="bg-white py-1 px-3 rounded-lg border border-gray-200 shadow-sm">
                  <motion.span 
                    className="font-koulen text-xl text-resotravo-blue"
                    animate={animateValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {projectsPerMonth}
                  </motion.span>
                </div>
              </div>
              
              <Slider 
                min={1} 
                max={5} 
                step={1} 
                value={[projectsPerMonth]} 
                onValueChange={(value) => setProjectsPerMonth(value[0])}
                className="w-full [&>span]:bg-resotravo-blue"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>1</span>
                <span>5</span>
              </div>
            </div>

            {/* Conseils */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-800 mb-2 text-sm">CONSEIL</h4>
              <p className="text-xs text-blue-700">
                {projectsPerMonth >= 4 ? (
                  "Avec ce volume, vous pouvez en faire votre activité principale"
                ) : projectsPerMonth >= 2 ? (
                  "Parfait pour compléter vos revenus"
                ) : (
                  "Idéal pour commencer"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Version Desktop - Ordre original */}
        <div className="hidden md:grid md:grid-cols-2">
          {/* Colonne des controles */}
          <div className="p-8 space-y-6">
            <h3 className="font-koulen text-2xl text-resotravo-blue mb-6">SIMULATEUR DE REVENUS</h3>
            
            {/* Temps consacré */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-800">TEMPS CONSACRÉ</label>
                    <span className="text-sm text-gray-500">Heures/semaine</span>
                  </div>
                </div>
                <div className="bg-white py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                  <motion.span 
                    className="font-koulen text-2xl text-resotravo-blue"
                    animate={animateValue ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {implicationLevel}h
                  </motion.span>
                </div>
              </div>
              
              <Slider 
                min={5} 
                max={40} 
                step={1} 
                value={[implicationLevel]} 
                onValueChange={(value) => setImplicationLevel(value[0])}
                className="w-full [&>span]:bg-resotravo-blue"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>5h</span>
                <span>40h</span>
              </div>
            </div>
            
            {/* Nombre de projets */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-resotravo-blue flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-800">PROJETS MENSUELS</label>
                    <span className="text-sm text-gray-500">Nombre de projets</span>
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
                min={1} 
                max={5} 
                step={1} 
                value={[projectsPerMonth]} 
                onValueChange={(value) => setProjectsPerMonth(value[0])}
                className="w-full [&>span]:bg-resotravo-blue"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>1</span>
                <span>5</span>
              </div>
            </div>

            {/* Conseils */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-800 mb-2">CONSEIL</h4>
              <p className="text-sm text-blue-700">
                {projectsPerMonth >= 4 ? (
                  "Avec ce volume de projets, vous pouvez en faire votre activité principale"
                ) : projectsPerMonth >= 2 ? (
                  "Parfait pour compléter vos revenus de manière significative"
                ) : (
                  "Idéal pour commencer et prendre de l'expérience"
                )}
              </p>
            </div>
          </div>
          
          {/* Colonne des résultats */}
          <div className="bg-resotravo-blue p-8 text-white">
            <div className="h-full flex flex-col">
              <h3 className="font-koulen text-2xl mb-8">VOS REVENUS POTENTIELS</h3>
              
              <div className="space-y-6 flex-1">
                {/* Revenu mensuel */}
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <p className="text-white/80 font-medium">REVENU MENSUEL MOYEN</p>
                  </div>
                  
                  <motion.div 
                    className="text-center py-6 px-6 rounded-xl border border-green-200/30 bg-green-600/20 shadow-sm"
                    animate={animateValue ? { y: [0, -5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-koulen text-white">
                        {estimatedMonthlyRevenue.toLocaleString()} €
                      </span>
                    </div>
                    <div className="text-white/80 text-sm mt-1">
                      Soit {estimatedYearlyRevenue.toLocaleString()} € /an
                    </div>
                  </motion.div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 bg-white/15 p-2 rounded-lg">
                      <Check className="w-4 h-4 text-green-300" /> 
                      <span className="text-sm">
                        <span className="font-medium">{baseCommission}€</span> par projet en moyenne
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 p-2 rounded-lg">
                      <Check className="w-4 h-4 text-green-300" /> 
                      <span className="text-sm">
                        <span className="font-medium">{Math.round(implicationLevel / projectsPerMonth)}h</span> nécessaires par projet/semaine
                      </span>
                    </div>
                  </div>
                </div>

                {/* Détails */}
                <div className="mt-auto">
                  <h4 className="text-white/90 text-lg mb-2">Comment ça marche :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">
                        Chaque projet nécessite environ 5h/semaine
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">
                        Commission moyenne de {baseCommission}€ par projet
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">
                        Les heures et projets sont automatiquement synchronisés
                      </span>
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