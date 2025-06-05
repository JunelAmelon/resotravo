import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionContainer } from "@/components/section-container";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      
      <SectionContainer 
        id="politique-confidentialite" 
        background="white"
        className="pt-32 pb-16"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-koulen text-4xl md:text-5xl mb-8 text-resotravo-blue">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <p className="italic text-gray-600 mb-6">
                Dernière mise à jour : 5 juin 2025
              </p>
              
              <p className="mb-4">
                Chez RESOTRAVO, nous accordons une importance majeure à la protection de vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et
                protégeons vos informations personnelles lorsque vous utilisez notre site Web et nos services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">1. Informations que nous collectons</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Informations que vous nous fournissez</h3>
              <p className="mb-4">
                Lorsque vous vous inscrivez sur notre plateforme, nous pouvons collecter les informations suivantes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Informations personnelles : nom, prénom, adresse e-mail, numéro de téléphone</li>
                <li>Informations professionnelles : expérience, compétences, domaines d&apos;expertise</li>
                <li>Informations de paiement : coordonnées bancaires (pour les transactions sécurisées)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Informations collectées automatiquement</h3>
              <p className="mb-4">
                Lorsque vous naviguez sur notre site, nous pouvons recueillir automatiquement:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Informations techniques : adresse IP, type de navigateur, fournisseur d&apos;accès à Internet</li>
                <li>Informations de navigation : pages visitées, temps passé sur le site, parcours de navigation</li>
                <li>Cookies et technologies similaires (voir notre section dédiée aux cookies)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">2. Utilisation de vos informations</h2>
              <p className="mb-4">
                Nous utilisons vos informations personnelles pour:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fournir, personnaliser et améliorer nos services</li>
                <li>Traiter les transactions et gérer votre compte</li>
                <li>Communiquer avec vous concernant votre compte, nos services, ou pour répondre à vos demandes</li>
                <li>Vous envoyer des informations marketing (avec votre consentement)</li>
                <li>Analyser et améliorer notre site et nos offres</li>
                <li>Détecter et prévenir les activités frauduleuses</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">3. Partage des informations</h2>
              <p className="mb-4">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Des prestataires de services qui nous aident à opérer notre activité</li>
                <li>Des partenaires commerciaux (avec votre consentement explicite)</li>
                <li>Des autorités légales lorsque requis par la loi</li>
              </ul>
              <p>
                Tout partage de données est encadré par des contrats garantissant la sécurité et la confidentialité de vos informations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">4. Protection de vos données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre l&apos;accès non autorisé, la perte, la modification ou la destruction.
              </p>
              <p>
                Bien que nous fassions tout notre possible pour protéger vos informations, aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est totalement sécurisée.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">5. Cookies et technologies similaires</h2>
              <p className="mb-4">
                Notre site utilise des cookies et technologies similaires pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Vous pouvez contrôler l&apos;utilisation des cookies via les paramètres de votre navigateur.
              </p>
              <p>
                Types de cookies utilisés:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques</strong> : pour mesurer et analyser l&apos;utilisation du site</li>
                <li><strong>Cookies de fonctionnalité</strong> : pour mémoriser vos préférences</li>
                <li><strong>Cookies de ciblage</strong> : pour vous proposer des publicités pertinentes</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">6. Vos droits</h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit d&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition au traitement de vos données</li>
                <li>Droit de retirer votre consentement</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse: junel.dev@aximotravo.com
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">7. Modifications de la politique de confidentialité</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour actualisée.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement notre politique de confidentialité pour rester informé des mises à jour.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">8. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter:
              </p>
              <p>
                <strong>Email</strong>: <a href="mailto:junel.dev@aximotravo.com" className="text-resotravo-orange hover:text-resotravo-orange/80">junel.dev@aximotravo.com</a><br />
                <strong>Responsable</strong>: Junel BOKO ASSOBA<br />
                <strong>Adresse</strong>: 12 rue de la République, 75001 Paris
              </p>
            </div>
            
            <div className="text-sm text-gray-500 mt-12">
              <p className="text-center">
                © 2025 RESOTRAVO - Tous droits réservés
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <Footer />
    </>
  );
}
