import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Fonction route API pour le traitement du formulaire de liste d'attente
export async function POST(req: Request) {
  // Vérifier la méthode de la requête
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Méthode non autorisée' }, { status: 405 });
  }
  
  try {
    // Récupérer les données du formulaire
    const body = await req.json();
    const { name, email, phone, location } = body;
    
    console.log('Données reçues:', { name, email, phone, location });

    // Validation des données
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Vérifier les variables d'environnement pour l'envoi d'emails
    const emailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;
    if (!emailConfigured) {
      console.warn("AVERTISSEMENT: Variables d'environnement EMAIL_USER ou EMAIL_PASSWORD manquantes - l'API fonctionnera en mode dégradé sans envoi d'emails");
      // En développement, on continue sans email plutôt que d'échouer
    }
    
    // Variables pour le mode dégradé
    let transporter = null;
    let shouldSendEmails = false;
    
    // On ne configure le transporteur que si les variables sont définies
    if (emailConfigured) {
      console.log('Configuration du transporteur nodemailer avec:', {
        user: process.env.EMAIL_USER?.substring(0, 5) + '...',  // Log partiel pour la sécurité
        hasPassword: !!process.env.EMAIL_PASSWORD
      });
      
      // Configuration simple de nodemailer pour Gmail
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        }
      });
      
      shouldSendEmails = true;
    } else {
      console.log('Mode dégradé activé: pas d\'envoi d\'emails');
    }

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

    try {
      if (shouldSendEmails && transporter) {
        console.log('Tentative d\'envoi d\'emails avec nodemailer...');
        
        // Test de la configuration avant envoi
        console.log('Test de la configuration SMTP...');
        try {
          await transporter.verify();
          console.log('✓ Configuration SMTP valide');
        } catch (verifyError) {
          console.error('✗ Erreur de vérification SMTP:', verifyError);
          // En cas d'erreur de vérification, on passe en mode dégradé
          console.warn('Passage en mode dégradé: continue sans envoi d\'emails');
          shouldSendEmails = false;
        }
        
        if (shouldSendEmails) {
          // Envoyer l'email administrateur
          console.log('Envoi de l\'email administrateur...');
          try {
            const adminMailResult = await transporter.sendMail(mailOptions);
            console.log('✓ Email admin envoyé:', adminMailResult.response);
          } catch (adminEmailError) {
            console.error('✗ Échec envoi email admin:', adminEmailError);
            // En cas d'erreur, on passe en mode dégradé
            console.warn('Passage en mode dégradé: continue sans envoi d\'emails');
            shouldSendEmails = false;
          }
          
          if (shouldSendEmails) {
            // Envoyer l'email utilisateur
            console.log('Envoi de l\'email utilisateur...');
            try {
              const userMailResult = await transporter.sendMail(confirmationMail);
              console.log('✓ Email utilisateur envoyé:', userMailResult.response);
            } catch (userEmailError) {
              console.error('✗ Échec envoi email utilisateur:', userEmailError);
              // On continue même si l'email utilisateur échoue
              console.warn('Continuation malgré l\'échec de l\'email utilisateur');
            }
          }
        }
      } else {
        console.log('Mode dégradé: aucune tentative d\'envoi d\'emails');
      }

      // Réponse de succès
      console.log('Envoi d\'emails réussi, retour de la réponse de succès');
      return NextResponse.json({
        success: true,
        message: "Inscription réussie ! Vous recevrez bientôt un email de confirmation.",
      });
    } catch (emailError) {
      console.error("Erreur générale lors de l'envoi d'emails:", emailError);
      
      // Assurer que la réponse est toujours du JSON valide
      return NextResponse.json(
        { 
          success: false,
          error: "L'inscription a été reçue mais l'envoi de l'email a échoué.",
          errorDetails: emailError instanceof Error ? emailError.message : 'Erreur inconnue'
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de votre demande." },
      { status: 500 }
    );
  }
}
