<?php
// 🔐 Paramètres d'identification
$merchantId = "56591787355920";
$accessKey  = "PrhJLKUmcT2ns9x22FSR";
$contractNumber = "3126987";

// ✅ Création de l'en-tête d'autorisation HTTP (Basic Auth)
$authorization = base64_encode("$merchantId:$accessKey");

// 🔄 Données de la requête
$data = [
    "payment" => [
        "amount" => 4000, // en centimes → 40.00 €
        "currency" => 978 // Euro
    ],
    "order" => [
        "ref" => "CMD-" . time()
    ],
    "buyer" => [
        "firstName" => "Jean",
        "lastName" => "Dupont",
        "email" => "jean.dupont@example.com"
    ],
    "returnURL" => "https://resotravo.com/success",
    "cancelURL" => "https://resotravo.com/cancel",
    "notificationURL" => "https://payment.resotravo.com/notify.php",
    "contractNumber" => $contractNumber
];

// 📡 Envoi de la requête vers Payline (sandbox/homologation)
$ch = curl_init("https://homologation.payline.com/V4/services/WebPaymentAPI/initPayment");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Basic $authorization",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpcode != 200) {
    echo "Erreur de communication avec Payline. Code HTTP: $httpcode<br>";
    echo "Réponse brute : <pre>$response</pre>";
    exit;
}

$result = json_decode($response, true);

if (!isset($result["redirectURL"])) {
    echo "Erreur lors de la création du paiement :<br><pre>" . print_r($result, true) . "</pre>";
    exit;
}

// 🎯 Redirection vers la page de paiement Payline
header("Location: " . $result["redirectURL"]);
exit;
?>
