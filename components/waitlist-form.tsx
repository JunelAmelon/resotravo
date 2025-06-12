"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, User, Mail, Phone, MapPin, AlertCircle, Briefcase, Home, Hash } from "lucide-react";

export function WaitlistForm({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formState, setFormState] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    codePostal: "",
    ville: "",
    telephone: "",
    email: "",
    profession: "",
    secteur: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const EMAILJS_SERVICE_ID = "service_hx7964n";
  const EMAILJS_TEMPLATE_ID = "template_r6gim5o";
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
    
    // Validation
    const requiredFields = ['nom', 'prenom', 'telephone', 'email', 'ville', 'codePostal'];
    const missingFields = requiredFields.filter(field => !formState[field as keyof typeof formState]);
    
    if (missingFields.length > 0) {
      setError(`Veuillez remplir tous les champs obligatoires: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      const templateParams = {
        from_name: `${formState.prenom} ${formState.nom}`,
        from_email: formState.email,
        from_phone: formState.telephone,
        address: `${formState.adresse}, ${formState.codePostal} ${formState.ville}`,
        profession: formState.profession,
        secteur: formState.secteur,
        to_name: 'Resotravo',
        message: `Nouvelle inscription:
        Nom: ${formState.prenom} ${formState.nom}
        Email: ${formState.email}
        Téléphone: ${formState.telephone}
        Adresse: ${formState.adresse}, ${formState.codePostal} ${formState.ville}
        Profession: ${formState.profession}
        Secteur géographique: ${formState.secteur}`,
        date: new Date().toLocaleString('fr-FR')
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormState({
          nom: "",
          prenom: "",
          adresse: "",
          codePostal: "",
          ville: "",
          telephone: "",
          email: "",
          profession: "",
          secteur: ""
        });
      }, 3000);
      
    } catch (err) {
      console.error('Erreur:', err);
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-xl rounded-xl max-h-[90vh] overflow-y-auto w-[95%] p-4 sm:p-6">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
          aria-label="Fermer"
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
                    <div className="font-medium">Avantages de la liste d&apos;attente :</div>
                    <ul className="mt-2 space-y-1 text-left">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>Réduction de 25% sur la formation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>Accès prioritaire aux nouvelles fonctionnalités</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>Accompagnement personnalisé</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Colonne 1 */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium mb-1 flex items-center">
                    <User className="w-4 h-4 mr-2" /> Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formState.nom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium mb-1 flex items-center">
                    <User className="w-4 h-4 mr-2" /> Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formState.prenom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="adresse" className="block text-sm font-medium mb-1 flex items-center">
                    <Home className="w-4 h-4 mr-2" /> Adresse
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    value={formState.adresse}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="codePostal" className="block text-sm font-medium mb-1 flex items-center">
                      <Hash className="w-4 h-4 mr-2" /> Code postal *
                    </label>
                    <input
                      type="text"
                      id="codePostal"
                      name="codePostal"
                      value={formState.codePostal}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ville" className="block text-sm font-medium mb-1 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" /> Ville *
                    </label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      value={formState.ville}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Colonne 2 */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium mb-1 flex items-center">
                    <Phone className="w-4 h-4 mr-2" /> Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formState.telephone}
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
                  <label htmlFor="profession" className="block text-sm font-medium mb-1 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" /> Profession actuelle
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formState.profession}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="secteur" className="block text-sm font-medium mb-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> Secteur géographique
                  </label>
                  <input
                    type="text"
                    id="secteur"
                    name="secteur"
                    value={formState.secteur}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resotravo-blue"
                  />
                </div>
              </div>
              
              {/* Bouton et message d'erreur (full width) */}
              <div className="sm:col-span-2 space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                  </div>
                )}
                
                <div className="text-center">
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