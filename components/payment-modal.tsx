"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

const PRICE = 149.90;

export function PaymentModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const redirectToCitelis = async () => {
    try {
      const res = await fetch("/api/payment");
      const data = await res.json();
  
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert("Erreur de redirection.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Impossible de lancer le paiement.");
    }
  };
  

  // Redirection automatique à l’ouverture du modal
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        redirectToCitelis();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md rounded-xl max-h-[90vh] overflow-y-auto w-[95%] p-4 sm:p-6">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
          aria-label="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="py-10 text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-resotravo-orange" />
          <h3 className="text-xl font-medium mt-4">Redirection vers le paiement sécurisé</h3>
          <p className="text-gray-500 mt-2">
            Vous allez être redirigé vers la page de paiement de notre partenaire bancaire...
          </p>
          <div className="mt-4">
            <button
              onClick={redirectToCitelis}
              className="px-4 py-2 bg-resotravo-blue text-white rounded-lg hover:bg-resotravo-blue/90 transition-all"
            >
              Cliquez ici si la redirection ne fonctionne pas
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
