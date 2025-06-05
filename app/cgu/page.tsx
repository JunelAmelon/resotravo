import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SectionContainer } from '@/components/section-container';

export default function CGU() {
  return (
    <>
      <Header />
      
      <SectionContainer 
        id="cgu" 
        background="white"
        className="pt-32 pb-16"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-koulen text-4xl md:text-5xl mb-8 text-resotravo-blue">
            Conditions Générales d'Utilisation
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <p className="italic text-gray-600 mb-6">
                Date de dernière mise à jour : 5 juin 2025
              </p>
              
              <p className="mb-4">
                Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
                des modalités de mise à disposition du site et des services par RESOTRAVO et de définir les
                conditions d'accès et d'utilisation des services par « l'Utilisateur ».
              </p>
              <p>
                Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 1 : Les mentions légales</h2>
              <p>
                L'édition et la direction de la publication du site resotravo.com est assurée par Junel BOKO ASSOBA,
                domicilié à Paris. La personne est joignable à l'adresse mail junel.dev@aximotravo.com.
              </p>
              <p>
                L'hébergeur du site resotravo.com est la société Netlify, Inc., dont le siège social est situé au
                44 Montgomery Street, Suite 300, San Francisco, California 94104, États-Unis.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 2 : Accès au site</h2>
              <p>
                Le site resotravo.com permet à l'Utilisateur un accès gratuit aux services suivants :
                Informations sur les services de courtage en travaux, simulation de revenus potentiels.
              </p>
              <p>
                Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les
                frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion
                Internet, etc.) sont à sa charge.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 3 : Collecte des données</h2>
              <p>
                Pour la création d'un compte utilisateur, il est demandé à l'utilisateur de renseigner des informations
                personnelles. L'utilisateur est informé que conformément à la loi n°78-17 du 6 janvier 1978 relative à
                l'informatique, aux fichiers et aux libertés, modifiée par la loi n°2018-493 du 20 juin 2018, il bénéficie
                d'un droit d'accès, de rectification, d'effacement et de portabilité des informations qui le concernent.
              </p>
              <p>
                Des informations plus détaillées concernant la collecte et le traitement des données personnelles sont 
                disponibles dans la page "Politique de Confidentialité".
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 4 : Propriété intellectuelle</h2>
              <p>
                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, vidéos, etc.) font l'objet
                d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
              </p>
              <p>
                L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des
                différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé,
                toute utilisation à des fins commerciales et publicitaires est strictement interdite.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 5 : Responsabilité</h2>
              <p>
                Le site se réserve le droit de modifier le contenu à tout moment sans notification préalable. 
                Les sources des informations diffusées sur le site resotravo.com sont réputées fiables mais le site ne garantit pas qu'il 
                soit exempt de défauts, d'erreurs ou d'omissions.
              </p>
              <p>
                Le site n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou
                indirect pouvant en découler.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 6 : Liens hypertextes</h2>
              <p>
                Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces
                liens, il sortira du site resotravo.com. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles
                aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-resotravo-blue mb-4">Article 7 : Droit applicable et juridiction compétente</h2>
              <p>
                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un
                litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
              </p>
            </div>
            
            <div className="text-sm text-gray-500 mt-12">
              <p className="text-center">Pour toute question relative à l'application des présentes CGU, vous pouvez contacter l'éditeur à l'adresse mail : junel.dev@aximotravo.com</p>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <Footer />
    </>
  );
}
