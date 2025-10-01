// Método alternativo usando Google Apps Script Web App o Make.com/Zapier
export async function saveToGoogleSheets(data: {
  quoteId: string;
  email: string;
  phone: string;
  timestamp: string;
}) {
  const WEBHOOK_URL =
    process.env.GOOGLE_APPS_SCRIPT_URL || process.env.WEBHOOK_URL;

  if (!WEBHOOK_URL) {
    console.warn("Webhook URL not configured");
    return { success: false, error: "Missing webhook URL" };
  }

  try {
    console.log("Enviando datos al webhook:", WEBHOOK_URL);

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quoteId: data.quoteId,
        email: data.email,
        phone: data.phone,
        timestamp: data.timestamp,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Webhook error:", responseData);
      throw new Error(`Webhook error: ${response.status}`);
    }

    console.log("Successfully saved via webhook:", responseData);
    return { success: true, data: responseData };
  } catch (error) {
    console.error("Error saving via webhook:", error);
    return { success: false, error: String(error) };
  }
}
