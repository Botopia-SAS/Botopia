import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const inData = await req.formData();

    // Construir el payload para FormSubmit
    const outData = new FormData();

    // Copiar todos los campos recibidos
    for (const [key, value] of inData.entries()) {
      outData.append(key, value as any);
    }

    // Asegurar asunto
    const subject = (inData.get("_subject") || `PQRS - ${inData.get("subject") || "Solicitud"}`) as string;
    outData.set("_subject", subject);

    // Desactivar captcha en FormSubmit para evitar bloqueos
    if (!inData.has("_captcha")) {
      outData.set("_captcha", "false");
    }

    // Sugerir respuesta JSON de FormSubmit
    const res = await fetch("https://formsubmit.co/contacto@botopia.tech", {
      method: "POST",
      body: outData,
      headers: {
        Accept: "application/json",
      },
      // No enviar credentials ni cambiar mode; desde servidor no hay CORS
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: text || `Upstream error ${res.status}` },
        { status: 502 }
      );
    }

    // Intentar leer JSON, pero si no es JSON igual devolvemos ok
    let data: any = null;
    try {
      data = await res.json();
    } catch {
      // ignore
    }

    return NextResponse.json({ ok: true, upstream: data ?? null });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error?.message || "Internal error" },
      { status: 500 }
    );
  }
}
