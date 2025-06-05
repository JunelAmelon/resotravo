import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionContainer } from '@/components/section-container';

export default function MentionsLegales() {
  return (
    <>
      <Header />
      
      <SectionContainer 
        id="mentions-legales" 
        background="white"
        className="pt-32 pb-16"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-koulen text-4xl md:text-5xl mb-8 text-resotravo-blue">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">1. Éditeur du site</h2>
              <p>
                <strong>RESOTRAVO</strong><br />
                Forme juridique: SAS<br />
                Capital social: 10 000€<br />
                Siège social: 12 rue de la République, 75001 Paris<br />
                SIRET: XXX XXX XXX XXXXX<br />
                Directeur de la publication: Junel BOKO ASSOBA
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">2. Hébergeur</h2>
              <p>
                <strong>Netlify, Inc.</strong><br />
                44 Montgomery Street, Suite 300<br />
                San Francisco, California 94104<br />
                États-Unis<br />
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-resotravo-orange hover:text-resotravo-orange/80">
                  www.netlify.com
                </a>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">3. Développement</h2>
              <p>
                <strong>Junel BOKO ASSOBA</strong><br />
                Email: <a href="mailto:junel.dev@aximotravo.com" className="text-resotravo-orange hover:text-resotravo-orange/80">
                  junel.dev@aximotravo.com
                </a><br />
                Site conçu et développé pour RESOTRAVO
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site (structure, présentation, textes, logos, images, iconographies, 
                ainsi que leur mise en forme) est la propriété exclusive de RESOTRAVO.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, transmission, dénaturation, 
                totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, 
                et sur quelque support que ce soit est interdite.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">5. Limitation de responsabilité</h2>
              <p>
                RESOTRAVO s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des 
                informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment 
                et sans préavis, le contenu.
              </p>
              <p>
                RESOTRAVO décline toute responsabilité pour toute imprécision, inexactitude ou omission 
                portant sur des informations disponibles sur ce site.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">6. Droit applicable</h2>
              <p>
                Le site et son contenu sont régis par la loi française. Les utilisateurs du site sont soumis 
                à la réglementation française applicable en la matière.
              </p>
            </div>

            <div className="text-sm text-gray-500 mt-12">
              <p className="text-center">Dernière mise à jour : 5 juin 2025</p>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <Footer />
    </>
  );
}
