import { NextRequest, NextResponse } from "next/server";
import { saveToGoogleSheets } from "@/lib/sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      quoteId,
      email,
      phone,
      userAgent,
      language,
      screenResolution,
      referrer,
      currentUrl,
      timestamp,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    console.log("Recibida solicitud de cotización:", {
      quoteId,
      email,
      phone,
      userAgent,
      language,
      referrer,
      utmSource,
    });

    if (!quoteId || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Obtener IP del usuario
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "Unknown";

    console.log("Intentando guardar en Google Sheets...");
    const sheetResult = await saveToGoogleSheets({
      quoteId,
      email,
      phone,
      timestamp: timestamp || new Date().toISOString(),
      userAgent: userAgent || "",
      language: language || "",
      screenResolution: screenResolution || "",
      referrer: referrer || "",
      currentUrl: currentUrl || "",
      ip,
      utmSource: utmSource || "",
      utmMedium: utmMedium || "",
      utmCampaign: utmCampaign || "",
    });

    console.log("Resultado de Google Sheets:", sheetResult);

    // Track in Meta Pixel via server-side API (optional)
    const pixelToken = process.env.META_PIXEL_ACCESS_TOKEN;
    const pixelId =
      process.env.NEXT_PUBLIC_META_PIXEL_ID ||
      process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

    if (pixelToken && pixelId && pixelToken !== "tu_access_token_aqui") {
      try {
        console.log("Intentando enviar evento a Meta Pixel server-side...");
        const pixelResponse = await fetch(
          `https://graph.facebook.com/v18.0/${pixelId}/events`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              data: [
                {
                  event_name: "Lead",
                  event_time: Math.floor(Date.now() / 1000),
                  user_data: {
                    em: Buffer.from(email.toLowerCase()).toString("base64"),
                    ph: Buffer.from(phone.replace(/\D/g, "")).toString(
                      "base64"
                    ),
                  },
                  custom_data: { quote_id: quoteId },
                },
              ],
              access_token: pixelToken,
            }),
          }
        );
        const pixelData = await pixelResponse.json();
        console.log("Respuesta de Meta Pixel:", pixelData);
      } catch (error) {
        console.warn("Meta Pixel server-side tracking failed:", error);
      }
    } else {
      console.log(
        "Meta Pixel server-side no configurado (token faltante o placeholder)"
      );
    }

    return NextResponse.json({
      success: true,
      sheetResult,
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
