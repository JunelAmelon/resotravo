"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, User, Mail, Phone, MapPin, AlertCircle } from "lucide-react";

export function WaitlistForm({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  // Référence pour le formulaire avec EmailJS
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    location: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  // Configuration EmailJS avec les identifiants réels
  const EMAILJS_SERVICE_ID = "service_hx7964n";
  const EMAILJS_TEMPLATE_ID = "template_r6gim5o"; // Template admin liste d'attente
  const EMAILJS_PUBLIC_KEY = "TyfUIOOjSF2kbLmzi";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Validation simple
    if (!formState.name || !formState.email || !formState.phone) {
      setError("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialiser EmailJS avec votre clé publique
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      console.log('Envoi du formulaire via EmailJS');
      
      // Préparer les données pour EmailJS
      // Elles doivent correspondre aux variables dans votre modèle EmailJS
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        from_phone: formState.phone,
        from_location: formState.location || 'Non spécifié',
        to_name: 'Resotravo',
        message: `Nouvelle inscription à la liste d'attente de ${formState.name} (${formState.email}), téléphone: ${formState.phone}, localisation: ${formState.location || 'Non spécifiée'}`,
        date: new Date().toLocaleString('fr-FR')
      };
      
      // Envoyer l'email avec EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('Email envoyé avec succès!', result.text);
      
      // Succès
      setIsSubmitted(true);
      
      // Après 3 secondes, fermer le modal et réinitialiser le formulaire
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          location: ""
        });
      }, 3000);
      
    } catch (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err);
      setError("Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md rounded-xl max-h-[90vh] overflow-y-auto w-[95%] p-4 sm:p-6">
        {/* Bouton de fermeture plus visible pour mobile */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
          aria-label="Fermer le formulaire"
          title="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-koulen text-center text-resotravo-blue">
                Rejoignez la liste d&apos;attente
              </DialogTitle>
              <DialogDescription asChild>
                <div className="text-center">
                  <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm">
                    <div className="font-medium">En rejoignant la liste d&apos;attente, vous bénéficierez :</div>
                    <ul className="mt-2 space-y-1 text-left">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>D&apos;une réduction de 25% sur la formation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>D&apos;un accès prioritaire aux nouvelles fonctionnalités</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>D&apos;un accompagnement personnalisé</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center">
                  <User className="w-4 h-4 mr-2" /> Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-1 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> Ville/Pays (optionnel)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formState.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}
              
              <div className="mt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-resotravo-orange text-white font-bold rounded-lg hover:bg-resotravo-orange/90 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Rejoindre la liste d'attente"}
                </button>
                <p className="mt-2 text-xs text-gray-500">
                  En soumettant ce formulaire, vous acceptez d&apos;être contacté(e) par notre équipe.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-koulen text-gray-800 mb-2">Inscription réussie !</h3>
            <div className="text-gray-600">
              Votre demande a bien été enregistrée. Un email de confirmation vient de vous être envoyé avec toutes les informations pour bénéficier de votre réduction de 25%.
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
