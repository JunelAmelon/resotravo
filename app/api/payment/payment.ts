// pages/api/payment.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Méthode non autorisée' });

  const { amount, returnUrl } = req.body;

  const contractNumber = "3126987";
  const merchantId = "56591787355920";
  const apiKey = "PrhJLKUmcT2ns9x22FSR";
  const basicAuth = "Basic NTY1OTE3ODczNTU5MjA6UHJoSkxLVW1jVDJuczl4MjJGU1I=";

  const body = new URLSearchParams({
    payment: JSON.stringify({
      amount: {
        value: amount,
        currency: "978" // Euro
      },
      contractNumber,
      orderRef: `RESO-${Date.now()}`,
      returnUrl,
    }),
    buyer: JSON.stringify({
      merchantId
    })
  });

  try {
    const response = await fetch("https://homologation.payline.com/V4/services/WebPaymentAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: basicAuth
      },
      body
    });

    const result = await response.text(); // ou `.json()` si l'API renvoie du JSON

    if (!response.ok) {
      return res.status(response.status).json({ message: "Erreur API Payline", result });
    }

    res.status(200).json({ message: "OK", result });
  } catch (error: any) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}
