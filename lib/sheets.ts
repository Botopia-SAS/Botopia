import { google } from "googleapis";

export async function saveToGoogleSheets(data: {
  quoteId: string;
  email: string;
  phone: string;
  timestamp: string;
  userAgent?: string;
  language?: string;
  screenResolution?: string;
  referrer?: string;
  currentUrl?: string;
  ip?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}) {
  const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

  // PRIORIDAD 1: Service Account usando JSON completo (más confiable)
  const serviceAccountJSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  console.log("🔍 Debug - serviceAccountJSON existe?", !!serviceAccountJSON);
  console.log("🔍 Debug - spreadsheetId:", spreadsheetId);

  if (serviceAccountJSON && spreadsheetId) {
    try {
      console.log("📝 Usando Service Account (JSON completo)...");

      const credentials = JSON.parse(serviceAccountJSON);
      console.log("✅ Credentials parseados, email:", credentials.client_email);

      const auth = new google.auth.JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:M", // Expandido para incluir todas las columnas
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              data.quoteId,
              data.email,
              data.phone,
              data.timestamp,
              data.userAgent || "",
              data.language || "",
              data.screenResolution || "",
              data.referrer || "",
              data.currentUrl || "",
              data.ip || "",
              data.utmSource || "",
              data.utmMedium || "",
              data.utmCampaign || "",
            ],
          ],
        },
      });

      console.log("✅ Guardado exitosamente con Service Account");
      return {
        success: true,
        data: response.data,
        method: "service-account-json",
      };
    } catch (error: any) {
      console.error("❌ Error con Service Account (JSON):", error.message);
      // Continuar con fallbacks
    }
  }

  // PRIORIDAD 2: Google Apps Script
  const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (APPS_SCRIPT_URL) {
    try {
      console.log("📝 Usando Google Apps Script...");

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      console.log("✅ Datos enviados a Google Apps Script");
      return { success: true, method: "apps-script" };
    } catch (error) {
      console.error("❌ Error con Apps Script:", error);
    }
  }

  console.warn("⚠️ Ningún método de autenticación válido configurado");
  return { success: false, error: "No authentication method configured" };
}
