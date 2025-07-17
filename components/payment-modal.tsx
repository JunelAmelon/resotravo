"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export function PaymentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const redirectToCitelis = async () => {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
      });
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
      <DialogContent
        className="sm:max-w-md rounded-xl max-h-[90vh] overflow-y-auto w-[95%] p-4 sm:p-6"
        aria-describedby="payment-description"
      >
        <DialogHeader>
          <DialogTitle>Redirection en cours</DialogTitle>
          <DialogDescription id="payment-description">
            Vous allez être redirigé vers la page de paiement de notre partenaire bancaire...
          </DialogDescription>
        </DialogHeader>

        <div className="py-10 text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-resotravo-orange" />
          <h3 className="text-xl font-medium mt-4">
            Paiement sécurisé en cours
          </h3>

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
