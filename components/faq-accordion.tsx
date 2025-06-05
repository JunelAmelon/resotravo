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
    question: "Faut-il des compétences en bâtiment ?",
    answer: "Non, absolument pas ! Notre formation est conçue pour être accessible à tous, quel que soit votre niveau de départ. Nous vous formons sur tous les aspects nécessaires, et notre réseau d'experts est là pour vous accompagner sur les aspects techniques.",
    color: "text-resotravo-blue"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "Combien de temps dois-je y consacrer ?",
    answer: "C'est vous qui décidez ! Notre plateforme est accessible 24/7 et vous permet d'avancer à votre rythme. Que vous souhaitiez en faire une activité principale ou complémentaire, vous gardez une flexibilité totale dans la gestion de votre temps.",
    color: "text-resotravo-orange"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    question: "Est-ce que c'est rentable ?",
    answer: "Oui ! Grâce à nos partenariats exclusifs et nos outils optimisés, nos courtiers génèrent en moyenne 1500€ de commission par projet. Avec notre accompagnement et notre formation, vous apprenez à maximiser vos gains dès le début.",
    color: "text-resotravo-blue"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    question: "Et si je suis à l'étranger ?",
    answer: "Aucun problème ! Notre formation et nos outils sont 100% en ligne et accessibles depuis n'importe où. Vous pouvez suivre la formation et gérer votre activité entièrement à distance, en français.",
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