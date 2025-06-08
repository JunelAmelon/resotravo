import { NextResponse } from 'next/server';

// Définir cette route comme dynamique
export const dynamic = 'force-dynamic';

/**
 * API Waitlist - Redirigée vers EmailJS
 * 
 * Cette API est désactivée car nous utilisons maintenant EmailJS directement depuis le client
 * pour une meilleure fiabilité et simplicité de configuration.
 */
export async function POST(req: Request) {
  return NextResponse.json({
    success: false,
    message: "Cette API est désactivée. Le formulaire utilise désormais EmailJS directement.",
  }, { status: 200 });
}
