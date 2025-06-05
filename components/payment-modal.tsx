"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PRICE = 149.90;

export function PaymentModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [redirectingToPaypal, setRedirectingToPaypal] = useState(false);
  
  // Fonction pour rediriger directement vers PayPal
  const redirectToPayPal = () => {
    // URL PayPal réelle avec le montant
    window.open(
      `https://www.paypal.com/checkoutnow?token=EC-DEMO&useraction=commit`, 
      '_blank'
    );
    setIsOpen(false);
  };
  
  // Redirection automatique à l'ouverture du modal
  useEffect(() => {
    if (isOpen) {
      setRedirectingToPaypal(true);
      const timer = setTimeout(() => {
        redirectToPayPal();
      }, 1000); // Court délai pour permettre au modal de s'afficher brièvement
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  useEffect(() => {
    // Ne charge le script que si le modal est ouvert
    if (!isOpen) return;
    
    // Évite de charger le script plusieurs fois
    if (window.paypal) {
      setScriptLoaded(true);
      initializePayPalButton();
      return;
    }
    
    // Charge le script PayPal
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=test&currency=EUR";
    script.onload = () => {
      setScriptLoaded(true);
      initializePayPalButton();
    };
    document.body.appendChild(script);
    
    return () => {
      // Nettoie le container PayPal lors du démontage
      const container = document.getElementById("paypal-button-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [isOpen]);
  
  const initializePayPalButton = () => {
    if (!window.paypal || !isOpen) return;
    
    const container = document.getElementById("paypal-button-container");
    if (!container) return;
    
    // Nettoie le container avant de créer un nouveau bouton
    container.innerHTML = "";
    
    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'pay'
      },
      createOrder: (_data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Formation complète RESOTRAVO",
              amount: {
                currency_code: "EUR",
                value: PRICE.toString()
              }
            }
          ]
        });
      },
      onApprove: (_data: any, _actions: any) => {
        setIsPaymentProcessing(true);
        
        // Simule un traitement
        setTimeout(() => {
          setIsPaymentProcessing(false);
          setIsPaymentComplete(true);
          
          // Ferme la fenêtre après quelques secondes
          setTimeout(() => {
            setIsOpen(false);
            setIsPaymentComplete(false);
          }, 3000);
        }, 2000);
      }
    }).render("#paypal-button-container");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md rounded-xl max-h-[90vh] overflow-y-auto w-[95%] p-4 sm:p-6">
        {/* Bouton de fermeture plus visible pour mobile */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
          aria-label="Fermer la fenêtre de paiement"
          title="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {redirectingToPaypal ? (
          <div className="py-10 text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-resotravo-orange" />
            <h3 className="text-xl font-medium mt-4">Redirection vers PayPal</h3>
            <p className="text-gray-500 mt-2">Vous allez être redirigé vers la page de paiement PayPal...</p>
            <div className="mt-4">
              <button 
                onClick={redirectToPayPal} 
                className="px-4 py-2 bg-resotravo-blue text-white rounded-lg hover:bg-resotravo-blue/90 transition-all">
                Cliquez ici si la redirection ne fonctionne pas
              </button>
            </div>
          </div>
        ) : isPaymentProcessing ? (
          <div className="py-10 text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-resotravo-orange" />
            <h3 className="text-xl font-medium mt-4">Traitement en cours...</h3>
            <p className="text-gray-500 mt-2">Veuillez patienter pendant que nous traitons votre paiement.</p>
          </div>
        ) : isPaymentComplete ? (
          <div className="py-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-koulen text-gray-800 mt-6">Paiement réussi !</h3>
            <p className="text-gray-600 mt-2">
              Merci pour votre achat. Vous recevrez un email avec les détails d&apos;accès à votre formation.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-koulen text-resotravo-blue text-center">
                Paiement sécurisé
              </DialogTitle>
              <div className="text-center mt-2">
                <p className="text-gray-600">Formation complète RESOTRAVO</p>
                <p className="text-3xl font-koulen text-resotravo-orange mt-2">
                  {PRICE}€
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span className="text-gray-600">Formation complète</span>
                  <span className="font-medium">{PRICE}€</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span>{PRICE}€</span>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  <p>Paiement sécurisé par PayPal ou carte bancaire</p>
                </div>
              </div>
            </DialogHeader>
            
            <div className="mt-4">
              <div className="flex items-center justify-center mb-4">
                <div className="border w-full"></div>
                <span className="px-4 text-gray-500 text-sm">PAYER AVEC</span>
                <div className="border w-full"></div>
              </div>
              
              {!scriptLoaded ? (
                <div className="py-6 text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Chargement des options de paiement...</p>
                </div>
              ) : (
                <div id="paypal-button-container"></div>
              )}
              
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-3">
                  <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="PayPal" className="h-6 opacity-60" />
                  <img src="https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_1280.png" alt="Visa" className="h-6 opacity-60" />
                  <img src="https://cdn.pixabay.com/photo/2015/08/24/19/46/card-906368_1280.png" alt="Mastercard" className="h-6 opacity-60" />
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                En procédant au paiement, vous acceptez nos conditions générales de vente.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
