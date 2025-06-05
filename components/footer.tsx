"use client";

import Link from "next/link";

export function Footer() {
  const menuItems = [
    { href: "#hero", label: "Accueil" },
    { href: "#why", label: "Pourquoi RESOTRAVO" },
    { href: "#how", label: "Comment ça marche" },
    { href: "#offer", label: "Offre spéciale" },
    { href: "#faq", label: "FAQ" },
  ];

  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/cgu", label: "CGU" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">À propos</h3>
            <p className="text-sm mb-4">
              RESOTRAVO est le premier réseau de courtage en travaux nouvelle génération, 
              100% digital, 100% humain.
            </p>
            <Link href="/" className="flex items-center">
              <span className="font-koulen text-xl">
                <span className="text-white">RESO</span>
                <span className="text-resotravo-orange">TRAVO</span>
              </span>
            </Link>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-resotravo-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="mailto:contact@resotravo.fr"
                  className="hover:text-resotravo-orange transition-colors"
                >
                  contact@resotravo.fr
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-resotravo-orange transition-colors"
                >
                  Support client
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-resotravo-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>© RESOTRAVO 2025 – Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}