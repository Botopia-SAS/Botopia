// Script para agregar encabezados a Google Sheet
// Ejecutar con: npx tsx scripts/setup-google-sheet-headers.ts

import { config } from "dotenv";
import { google } from "googleapis";

// Cargar variables de entorno
config({ path: ".env.local" });

async function setupHeaders() {
  const serviceAccountJSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

  if (!serviceAccountJSON || !spreadsheetId) {
    console.error("❌ Faltan variables de entorno");
    console.log("GOOGLE_SERVICE_ACCOUNT_JSON:", !!serviceAccountJSON);
    console.log("NEXT_PUBLIC_GOOGLE_SHEET_ID:", spreadsheetId);
    return;
  }

  try {
    console.log("🔧 Configurando Google Sheets...");
    const credentials = JSON.parse(serviceAccountJSON);

    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Verificar si ya hay encabezados
    const checkResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:M1",
    });

    if (checkResponse.data.values && checkResponse.data.values.length > 0) {
      console.log("⚠️  Ya existen encabezados:", checkResponse.data.values[0]);
      console.log("¿Deseas reemplazarlos? (Este script los sobrescribirá)");
    }

    // Agregar encabezados
    const headers = [
      "Quote ID",
      "Email",
      "Teléfono",
      "Fecha y Hora",
      "Navegador",
      "Idioma",
      "Resolución",
      "Origen (Referrer)",
      "URL Completa",
      "IP Address",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Sheet1!A1:M1",
      valueInputOption: "RAW",
      requestBody: {
        values: [headers],
      },
    });

    console.log("✅ Encabezados agregados exitosamente!");
    console.log("📊 Columnas configuradas:", headers.join(" | "));

    // Formatear encabezados (negrita, fondo gris)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0, // Sheet1 por defecto
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 13,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 0.9,
                    green: 0.9,
                    blue: 0.9,
                  },
                  textFormat: {
                    bold: true,
                  },
                  horizontalAlignment: "CENTER",
                },
              },
              fields:
                "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)",
            },
          },
          {
            updateSheetProperties: {
              properties: {
                sheetId: 0,
                gridProperties: {
                  frozenRowCount: 1, // Congelar primera fila
                },
              },
              fields: "gridProperties.frozenRowCount",
            },
          },
        ],
      },
    });

    console.log("🎨 Formato aplicado: negrita, fondo gris, fila congelada");
    console.log(
      `\n📍 Ver tu sheet: https://docs.google.com/spreadsheets/d/${spreadsheetId}`
    );
  } catch (error: any) {
    console.error("❌ Error:", error.message);
    if (error.response?.data) {
      console.error("Detalles:", error.response.data);
    }
  }
}

setupHeaders();
