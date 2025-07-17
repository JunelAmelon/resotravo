import { NextResponse } from 'next/server';

// Définir cette route comme dynamique
// export const dynamic = 'force-dynamic';

/**
 * API Waitlist - Compatibilité avec ancien code
 * 
 * Cette API est maintenue pour éviter les erreurs 404 dans le code JavaScript compilé
 * qui pourrait encore référencer cette route.
 * L'envoi d'emails est maintenant géré par EmailJS côté client.
 */
export async function GET() {
  return NextResponse.json({ status: "ok" });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Inscription en liste d'attente réussie!",
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
