import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="font-koulen text-6xl text-resotravo-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center rounded-full bg-resotravo-orange text-white px-8 py-3 font-medium hover:bg-resotravo-orange/90 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}