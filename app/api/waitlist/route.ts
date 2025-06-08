import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Récupérer les données du formulaire
    const body = await req.json();
    const { name, email, phone, location } = body;

    // Validation des données
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Créer un transporteur pour l'envoi d'emails (à remplacer par vos propres identifiants)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Vous pouvez utiliser d'autres services comme 'outlook', etc.
      auth: {
        user: process.env.EMAIL_USER, // Utilisez des variables d'environnement pour les identifiants
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email à vous-même pour vous notifier d'une nouvelle inscription
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Votre adresse email
      subject: 'Nouvelle inscription sur la liste d\'attente Resotravo',
      html: `
        <h1>Nouvelle inscription sur la liste d'attente</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Localisation:</strong> ${location || 'Non spécifiée'}</p>
        <p>Date d'inscription: ${new Date().toLocaleString('fr-FR')}</p>
      `,
    };

    // Email de confirmation à l'utilisateur
    const confirmationMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation d\'inscription à la liste d\'attente Resotravo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://votre-logo-url.com" alt="Resotravo" style="max-width: 200px;">
          </div>
          
          <h1 style="color: #2B4570; text-align: center;">Merci pour votre inscription !</h1>
          
          <p>Bonjour ${name},</p>
          
          <p>Nous avons bien reçu votre demande d'inscription à la liste d'attente pour Resotravo.</p>
          
          <p>Vous bénéficierez des avantages suivants :</p>
          <ul>
            <li>Une réduction de 25% sur l'abonnement</li>
            <li>Un accès prioritaire aux nouvelles fonctionnalités</li>
            <li>Un accompagnement personnalisé</li>
          </ul>
          
          <p>Nous vous contacterons prochainement avec plus d'informations sur le lancement de notre service.</p>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="font-weight: bold;">Resotravo - Le premier réseau de courtage en travaux 100% digital et humain</p>
            <p style="font-size: 12px; color: #666;">Si vous avez des questions, n'hésitez pas à nous contacter à <a href="mailto:contact@resotravo.com">contact@resotravo.com</a></p>
          </div>
        </div>
      `,
    };

    // Envoyer les emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMail);

    // Réponse de succès
    return NextResponse.json({
      success: true,
      message: "Inscription réussie ! Vous recevrez bientôt un email de confirmation.",
    });
    
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
