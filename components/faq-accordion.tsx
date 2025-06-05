"use client";

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Clock, Globe } from "lucide-react";

const faqs = [
  {
    icon: <HelpCircle className="w-5 h-5" />,
    question: "Faut-il des competences en batiment ?",
    answer: "Non, absolument pas ! Notre formation est concue pour etre accessible a tous, quel que soit votre niveau de depart. Nous vous formons sur tous les aspects necessaires, et notre reseau d'experts est la pour vous accompagner sur les aspects techniques.",
    color: "text-resotravo-blue"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "Combien de temps dois-je y consacrer ?",
    answer: "C'est vous qui decidez ! Notre plateforme est accessible 24/7 et vous permet d'avancer a votre rythme. Que vous souhaitiez en faire une activite principale ou complementaire, vous gardez une flexibilite totale dans la gestion de votre temps.",
    color: "text-resotravo-orange"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    question: "Est-ce que c'est rentable ?",
    answer: "Oui ! Grace a nos partenariats exclusifs et nos outils optimises, nos courtiers generent en moyenne 1500€ de commission par projet. Avec notre accompagnement et notre formation, vous apprenez a maximiser vos gains des le debut.",
    color: "text-resotravo-blue"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    question: "Et si je suis a l'etranger ?",
    answer: "Aucun probleme ! Notre formation et nos outils sont 100% en ligne et accessibles depuis n'importe ou. Vous pouvez suivre la formation et gerer votre activite entierement a distance, en francais.",
    color: "text-resotravo-orange"
  }
];

export function FAQAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="hover:no-underline p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-10 h-10 rounded-lg ${faq.color === 'text-resotravo-blue' ? 'bg-resotravo-blue/10' : 'bg-resotravo-orange/10'} flex items-center justify-center ${faq.color}`}>
                      {faq.icon}
                    </div>
                    <span className="font-koulen text-xl text-gray-800">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-14 pb-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-gray-600">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}