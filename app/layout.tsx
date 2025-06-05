import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'RESOTRAVO | Rejoignez le réseau de courtage en travaux nouvelle génération',
  description: 'Générez un revenu complémentaire sans diplôme, sans réseau, sans expérience avec RESOTRAVO. Rejoignez le premier réseau de courtage en travaux 100% digital et humain.',
  keywords: 'courtage en travaux, revenus complémentaires, travail à domicile, formation en ligne, resotravo',
  openGraph: {
    title: 'RESOTRAVO | Rejoignez le réseau de courtage en travaux nouvelle génération',
    description: 'Générez un revenu complémentaire sans diplôme, sans réseau, sans expérience avec RESOTRAVO.',
    url: 'https://resotravo.fr',
    siteName: 'RESOTRAVO',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Koulen&family=Libre+Franklin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-libre">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}