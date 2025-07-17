// app/api/payment/route.ts
import { NextResponse } from 'next/server';
import soap from 'soap';

export async function GET() {
  const wsdlUrl = 'https://homologation.payline.com/V4/services/WebPaymentAPI?wsdl';
  const params = {
    payment: {
      amount: 14990, // Montant en centimes
      currency: 978, // 978 = Euro
      action: 101,
      mode: 'CPT',
      contractNumber: process.env.PAYLINE_CONTRACT_NUMBER,
    },
    returnURL: 'resotravo.netlify.app',
    cancelURL: 'resotravo.netlify.app',
    order: {
      ref: 'ORDER123',
      amount: 14990,
      currency: 978,
      date: new Date().toISOString().split('T')[0],
    },
    buyer: {
      email: 'client@example.com',
    },
    authentication: {
      merchantId: process.env.PAYLINE_MERCHANT_ID,
      accessKey: process.env.PAYLINE_ACCESS_KEY,
    }
  };

  try {
    const client = await soap.createClientAsync(wsdlUrl);
    const [result] = await client.doWebPaymentAsync(params);

    if (result && result.redirectURL) {
      return NextResponse.json({ redirectUrl: result.redirectURL });
    } else {
      return NextResponse.json({ error: 'Pas de lien de redirection' }, { status: 500 });
    }
  } catch (err: any) {
    console.error("Erreur SOAP:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
